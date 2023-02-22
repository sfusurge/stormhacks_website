const Scrolling = Symbol();

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
	}

	return current;
}

/**
 * Checks to see if an element is being scrolled by a ScrollAnchor.
 * @param el The element.
 * @returns True if the element is being scrolled.
 */
export function isAnimatedScrolling(el: HTMLElement) {
	return (el as HTMLElement & { [Scrolling]: boolean })[Scrolling] ?? false;
}

export interface ScrollToElementOptions {
	animationSpeedModifier?: (ms: number, scrollDelta: number, scrollEl: HTMLElement) => number;
	onScrollFinish?: (el: HTMLElement, scrollEl: HTMLElement) => void;
	onScrollCancel?: (el: HTMLElement, scrollEl: HTMLElement) => void;
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
	const scrollPosStart = scrollTarget?.scrollTop;
	const scrollPosEnd = el.getBoundingClientRect().top - scrollTarget.getBoundingClientRect().top;
	const scrollDelta = scrollPosEnd - scrollPosStart;

	// Determine animation parameters.
	let scrollSpeed = getScrollSpeed(el);
	if (options?.animationSpeedModifier != null) {
		scrollSpeed = options.animationSpeedModifier(scrollSpeed, scrollDelta, scrollTarget);
	}

	// Animation functions.
	(scrollTarget as HTMLElement & { [Scrolling]: boolean })[Scrolling] = true;
	const animationEndTime = Date.now() + scrollSpeed;

	let cancelAnimate = false;
	let lastAnimateScrollTop = null;

	const animateEnded = () => {
		cancelAnimate = true;
		scrollTarget.removeEventListener("touchstart", animateEnded);
		scrollTarget.removeEventListener("mousewheel", animateEnded);

		// Scroll events still may be queued.
		// Wait 30ms then mark the element as no longer scrolling from an animation.
		setTimeout(() => {
			(scrollTarget as HTMLElement & { [Scrolling]: boolean })[Scrolling] = false;
		}, 30);
	};

	const animate = () => {
		if (cancelAnimate) {
			options?.onScrollCancel?.(el, scrollTarget);
			return;
		}

		const now = Date.now();
		if (now >= animationEndTime) {
			scrollTarget.scrollTop = scrollPosEnd;
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
		lastAnimateScrollTop = scrollTarget.scrollTop;
		scrollTarget.scrollTop = desiredScrollTop;
		if (animationPercentage > 0.1 && scrollTarget.scrollTop === lastAnimateScrollTop) {
			scrollTarget.scrollTop = scrollPosEnd;
			animateEnded();
			options?.onScrollFinish?.(el, scrollTarget);
			return;
		}

		// Request next frame.
		requestAnimationFrame(animate);
	};

	// Add listeners to cancel animation on user scroll and start the animation.
	scrollTarget.addEventListener("mousewheel", animateEnded);
	scrollTarget.addEventListener("touchstart", animateEnded);
	requestAnimationFrame(animate);
}
