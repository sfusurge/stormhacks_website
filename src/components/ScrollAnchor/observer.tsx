import type { ScrollAnchorProps } from "./components";
import { getScrollParent } from "./util";

const ScrollObserverKey = Symbol();
export type ScrollObserver = {
	observer: IntersectionObserver;
	listener: (evt: Event) => void;
	visibleAnchors: Set<Element>;
	anchors: Map<Element, ScrollObserverAnchor>;
};

type ScrollObserverAnchor = {
	id: string;
	visible: boolean;
	events: {
		onVisible: ScrollAnchorProps["onVisible"];
		onHidden: ScrollAnchorProps["onHidden"];
		onTop: ScrollAnchorProps["onTop"];
	};
};

/**
 * Gets the {@link ScrollObserver} for the target element.
 *
 * The scroll observer is an intersection observer and associated metadata for tracking
 * whenever {@link ScrollAnchor}s come into the viewport.
 *
 * @param el The element.
 * @returns The associated ScrollObserver, or null if there is no scroll viewport.
 */
export function getScrollObserver(el: HTMLElement): ScrollObserver | null {
	if (window.IntersectionObserver == null) return null; // No support.

	// Get the scroll parent.
	const scrollEl = getScrollParent(el);
	if (scrollEl == null) return null;

	// Get the observer.
	let observer = (scrollEl as HTMLElement & { [ScrollObserverKey]?: ScrollObserver })[ScrollObserverKey];
	if (observer != null) return observer;

	// We need to create a new observer.
	observer = createScrollObserver(scrollEl);
	(scrollEl as HTMLElement & { [ScrollObserverKey]: ScrollObserver })[ScrollObserverKey] = observer;
	return observer;
}

function createScrollObserver(scrollEl: HTMLElement): ScrollObserver {
	const anchors = new Map<Element, ScrollObserverAnchor>();
	const visibleAnchors = new Set<Element>();

	const intersectionTarget = scrollEl.nodeName === "HTML" ? undefined : scrollEl; /* <html> is browser viewport */
	const listenerTarget = intersectionTarget ?? window;

	// Create a scroll event listener.
	let lastActiveElement: Element | null = null;
	function updateActiveElement(el: Element) {
		if (el === lastActiveElement) return;

		// Call onVisible on the new anchor.
		const newAnchor = anchors.get(el);
		const result = newAnchor?.events?.onTop?.(newAnchor.id);
		if (result !== false) {
			lastActiveElement = el;
		}
	}

	const listener = () => {
		if (visibleAnchors.size === 0) return;
		if (visibleAnchors.size === 1) {
			updateActiveElement(visibleAnchors.values().next().value);
			return;
		}

		// Find the element at the top.
		const topEl = getTopElement(Array.from(visibleAnchors.values()), 0);
		updateActiveElement(topEl);
	};

	listenerTarget.addEventListener("scroll", listener);

	// Create an intersection observer so we don't check elements that aren't in the viewport.
	const intersectionObserver = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				const { target, isIntersecting } = entry;
				const anchorData = anchors.get(target);
				if (anchorData == null) {
					console.warn("Still tracking discarded element on intersection observer.", target);
					continue;
				}

				if (isIntersecting) {
					anchorData.events.onVisible?.(anchorData.id);
					visibleAnchors.add(target);
				} else {
					visibleAnchors.delete(target);
					anchorData.events.onHidden?.(anchorData.id);
				}
			}
		},
		{ root: intersectionTarget }
	);

	return {
		anchors,
		visibleAnchors,
		listener,
		observer: intersectionObserver,
	};
}

/**
 * Gets the top-most (relative to the window viewport) element within a list.
 * @param els
 * @param threshold
 */
function getTopElement(els: Element[], threshold?: number): Element {
	const _thresh = threshold ?? 0;
	let topY = els[0].getBoundingClientRect().top;
	let topEl = els[0];

	for (let el of els) {
		const rect = el.getBoundingClientRect();
		if (rect.top < topY) {
			topY = rect.top;
			topEl = el;
		}
	}

	return topEl;
}

/**
 * Gets the topmost visible {@link ScrollAnchor} within its scroll container.
 * @param el The scroll container, or a descendant of it.
 * @param threshold The threshold value.
 * @returns The topmost anchor ID, or null if there is not one.
 */
export function getTopmostVisibleAnchor(el: HTMLElement, threshold?: number): string | null {
	const observer = getScrollObserver(el);
	if (observer == null) return null;

	// Get all the visible anchors.
	const visibleAnchors = Array.from(observer.visibleAnchors.keys());
	if (visibleAnchors.length === 0) return null;

	// Get the top anchor.
	const topEl = getTopElement(visibleAnchors, threshold);
	const top = observer.anchors.get(topEl);
	if (top == null) return null;

	return top.id;
}
