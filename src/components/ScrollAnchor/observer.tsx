import type { ScrollAnchorProps } from "./components";
import { getScrollParent } from "./util";

const ScrollObserverKey = Symbol();
export type ScrollObserver = {
	observer: IntersectionObserver;
	anchors: Map<Element, ScrollObserverAnchor>;
};

type ScrollObserverAnchor = {
	id: string;
	visible: boolean;
	events: {
		onVisible: ScrollAnchorProps["onVisible"];
		onHidden: ScrollAnchorProps["onHidden"];
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

	// Create a new observer.
	const root = scrollEl.nodeName === "HTML" ? undefined : scrollEl; /* <html> is browser viewport */

	observer = {
		anchors: new Map(),
		observer: new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					const anchorData = observer!.anchors.get(entry.target);
					if (anchorData == null) {
						console.warn("Still tracking discarded element on intersection observer.", entry.target);
						continue;
					}

					const { id, events } = anchorData;
					if (entry.isIntersecting) {
						anchorData.visible = true;
						events.onVisible?.(id);
					} else {
						anchorData.visible = false;
						events.onHidden?.(id);
					}
				}
			},
			{ root }
		),
	};

	(scrollEl as HTMLElement & { [ScrollObserverKey]: ScrollObserver })[ScrollObserverKey] = observer;
	return observer;
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

	const _thresh = threshold ?? 0; // TODO(eth-p): Implement me
	const sortedVisible = Array.from(observer.anchors.entries())
		.filter(([_, { visible }]) => visible)
		.sort((a, b) => a[0].getBoundingClientRect().top - b[0].getBoundingClientRect().top);

	if (sortedVisible.length === 0) return null;
	return sortedVisible[0][1].id;
}
