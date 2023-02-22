import { PropsWithChildren, ReactElement } from "react";

export type ScrollAnchorProps = PropsWithChildren<{
	id: string;
}>;

/**
 * A scroll anchor.
 *
 * This creates an element that can be scrolled to using the {@link scrollToAnchor} function.
 */
export function ScrollAnchor({ children, id }: ScrollAnchorProps): ReactElement {
	return <div id={encodeAnchorId(id)}>{children}</div>;
}

/**
 * Encodes an arbitrary string into something that is valid as an element ID.
 *
 * @param id The ID to encode.
 * @returns The encoded ID.
 */
export function encodeAnchorId(id: string): string {
	return `${ScrollAnchor.name}-${id.replaceAll(
		/[^a-zA-Z]/g,
		(s) => "_" + s.charCodeAt(0).toString(16).padStart(2, "0")
	)}`;
}
