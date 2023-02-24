const Scrolling = Symbol();
const ScrollingCancelFn = Symbol();

/**
 * Gets the number of milliseconds that the scroll animation should take.
 * This looks at the element's `--animation-scroll` CSS variable, or returns `0` if that cannot be parsed.
 *
 * @returns The number of milliseconds for the animation.
 */
export function getScrollSpeed(el: HTMLElement): number {
	const styles = window.getComputedStyle(el);

	const animationScrollProp = (styles.getPropertyValue("--animation-scroll").trim() ?? "0s").toLowerCase();
	if (animationScrollProp.endsWith("s")) {
		return parseInt(animationScrollProp.substring(0, animationScrollProp.length - 1)) * 1000;
	} else if (animationScrollProp.endsWith("ms")) {
		return parseInt(animationScrollProp.substring(0, animationScrollProp.length - 2));
	}

	return 0;
}

/**
 * Returns the closest ancestor of an element that is scrollable.
 *
 * @param el The element.
 * @returns The ancestor, or null if one could not be found.
 */
export function getScrollParent(el: HTMLElement): HTMLElement | null {
	let current: HTMLElement | null = el;
	for (; current != null; current = current.parentElement) {
		if (current.scrollHeight > current.clientHeight) {
			break;
		}

		// Special case: the HTML element.
		if (current.nodeName === "HTML") {
			break;
		}

		// Try checking the overflow property.
		const { overflowY } = window.getComputedStyle(current);
		if (overflowY === "scroll" || overflowY === "auto") {
			break;
		}
	}

	return current;
}

/**
 * Returns the closest ancestor of an element that is scrollable.
 * Seeing as how we have a sticky header, this also accounts for the sticky header.
 *
 * @param el The element.
 * @returns The ancestor, or null if one could not be found.
 */
export function getScrollPosition(el: HTMLElement, scrollEl: HTMLElement): number {
	const offsetFromPage = el.getBoundingClientRect().top - scrollEl.getBoundingClientRect().top;

	const stickyHeader = document.getElementById("header");
	const stickyHeaderHeight = stickyHeader?.getBoundingClientRect().height ?? 0;

	return offsetFromPage - stickyHeaderHeight - 20 /* safety margin */;
}

/**
 * Checks to see if an element is being scrolled by a ScrollAnchor.
 * @param el The element.
 * @returns True if the element is being scrolled.
 */
export function isAnimatedScrolling(el: HTMLElement) {
	return (el as ScrollToElementElement)[Scrolling] ?? false;
}

export interface ScrollToElementOptions {
	animationSpeedModifier?: (ms: number, scrollDelta: number, scrollEl: HTMLElement) => number;
	onScrollFinish?: (el: HTMLElement, scrollEl: HTMLElement) => void;
	onScrollCancel?: (el: HTMLElement, scrollEl: HTMLElement) => void;
}

interface ScrollToElementElement extends HTMLElement {
	[Scrolling]?: boolean;
	[ScrollingCancelFn]?: () => void;
}

/**
 * Smoothly scroll to an element's position.
 * Uses cubic ease-out function.
 *
 * @param el The element to scroll to.
 * @param animationSpeedModifier A function to change the animation timing.
 */
export function scrollToElement(el: HTMLElement, options?: ScrollToElementOptions): void {
	const scrollTarget = getScrollParent(el);
	if (scrollTarget == null) {
		console.warn("Unable to find scroll parent of ", el);
		return;
	}

	// Determine scroll start and end positions.
	// We need to clamp it to between `0 <= desired <= max`.
	const scrollTopMax = scrollTarget.scrollHeight - scrollTarget.clientHeight;
	const scrollPosStart = scrollTarget?.scrollTop;
	const scrollPosEnd = Math.max(0, Math.min(getScrollPosition(el, scrollTarget), scrollTopMax));
	const scrollDelta = scrollPosEnd - scrollPosStart;

	// Determine animation parameters.
	let scrollSpeed = getScrollSpeed(el);
	if (options?.animationSpeedModifier != null) {
		scrollSpeed = options.animationSpeedModifier(scrollSpeed, scrollDelta, scrollTarget);
	}

	// Cancel any previous scroll animation if there is one.
	(scrollTarget as ScrollToElementElement)[ScrollingCancelFn]?.();

	// Animation functions.
	const animationEndTime = Date.now() + scrollSpeed;

	let finishedAnimate = false;
	let clearedProps = false;

	const animateEnded = () => {
		scrollTarget.removeEventListener("touchstart", animateEnded);
		scrollTarget.removeEventListener("mousewheel", animateEnded);
		window.removeEventListener("popstate", animateEnded);
		delete (scrollTarget as ScrollToElementElement)[ScrollingCancelFn];

		if (!finishedAnimate) {
			options?.onScrollCancel?.(el, scrollTarget);
		}

		// Scroll events still may be queued.
		// Wait 30ms then mark the element as no longer scrolling from an animation.

		if (!clearedProps) {
			clearedProps = true;
			setTimeout(() => {
				delete (scrollTarget as ScrollToElementElement)[Scrolling];
			}, 30);
		}

		finishedAnimate = true;
	};

	const animate = () => {
		if (finishedAnimate) {
			return;
		}

		const now = Date.now();
		if (now >= animationEndTime) {
			scrollTarget.scrollTop = scrollPosEnd;
			finishedAnimate = true;
			animateEnded();
			options?.onScrollFinish?.(el, scrollTarget);
			return;
		}

		// Calculate desired scroll top.
		const animationPercentage = 1 - (animationEndTime - Date.now()) / scrollSpeed;
		const ease = 1 - Math.pow(1 - animationPercentage, 3);
		const desiredScrollTop = scrollPosStart + ease * scrollDelta;

		// Update the scroll top.
		// If it hasn't changed since the last scroll event, we can't scroll any further.
		scrollTarget.scrollTop = desiredScrollTop;

		// Request next frame.
		requestAnimationFrame(animate);
	};

	// Add listeners to cancel animation on user scroll and start the animation.
	(scrollTarget as ScrollToElementElement)[Scrolling] = true;
	(scrollTarget as ScrollToElementElement)[ScrollingCancelFn] = () => {
		clearedProps = true; // The animation was preempted by another one.
		animateEnded();
	};

	window.addEventListener("popstate", animateEnded);
	scrollTarget.addEventListener("mousewheel", animateEnded);
	scrollTarget.addEventListener("touchstart", animateEnded);
	requestAnimationFrame(animate);
}

/**
 * Animates a scroll to a {@link ScrollAnchor} with the given ID.
 * The speed of the animation is dependent on the `--animation-scroll` CSS property.
 *
 * @param id The ID of the anchor.
 * @param options Options and callbacks.
 */
export function scrollToAnchor(
	anchor: string | HTMLElement,
	options?: Pick<ScrollToElementOptions, "onScrollCancel" | "onScrollFinish">
): void {
	const el = typeof anchor === "string" ? document.getElementById(encodeAnchorId(anchor)) : anchor;
	if (el == null) {
		console.warn("No scroll anchor with ID:", anchor);
		return;
	}

	scrollToElement(el, {
		...(options ?? {}),
		animationSpeedModifier(ms, delta, scrollEl) {
			// Speed up the animation if it's already visible in the viewport.
			const viewportHeight = scrollEl.clientHeight;
			return ms / Math.max(1, Math.abs(viewportHeight / delta));
		},
	});
}

/**
 * Encodes an arbitrary string into something that is valid as an element ID.
 *
 * @param id The ID to encode.
 * @returns The encoded ID.
 */
export function encodeAnchorId(id: string): string {
	const escapedId = id.replaceAll(/[^a-zA-Z]/g, (s) => "_" + s.charCodeAt(0).toString(16).padStart(2, "0"));
	return `ScrollAnchor-${escapedId}`;
}
