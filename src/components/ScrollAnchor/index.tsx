import { encodeAnchorId } from "./component";
import { ScrollToElementOptions, scrollToElement } from "./util";

export type { ScrollAnchorProps } from "./component";
export { ScrollAnchor as default } from "./component";

/**
 * Animates a scroll to a {@link ScrollAnchor} with the given ID.
 * The speed of the animation is dependent on the `--animation-scroll` CSS property.
 *
 * @param id The ID of the anchor.
 * @param options Options and callbacks.
 */
export function scrollToAnchor(
	id: string,
	options?: Pick<ScrollToElementOptions, "onScrollCancel" | "onScrollFinish">
): void {
	const el = document.getElementById(encodeAnchorId(id));
	if (el == null) {
		console.warn("No scroll anchor with ID:", id);
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
