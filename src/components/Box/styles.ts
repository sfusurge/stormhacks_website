import cx from "classnames";

import Styles from "./Box.module.scss";

/**
 * Available positions of labels.
 */
export const enum BoxLabelPosition {
	/**
	 * ```
	 *    __[Label]__
	 *   | Contents  |
	 *    -----------
	 * ```
	 */
	TopCenter = "top-center",

	/**
	 * ```
	 *    ________[Label]
	 *   | Contents  |
	 *    -----------
	 * ```
	 */
	TopRight = "top-right",

	/**
	 * ```
	 * [Label]_______
	 *   | Contents  |
	 *    -----------
	 * ```
	 */
	TopLeft = "top-left",
}

/**
 * Available style of boxes.
 */
export const enum BoxStyle {
	/**
	 * A regular box with a primary background color and inverted foreground color.
	 */
	Regular = "regular",

	/**
	 * An inverted box with an inverted background color and primary foreground color.
	 */
	Inverted = "inverted",

	/**
	 * An accent box that uses the accent color.
	 */
	Accented = "accent",

	/**
	 * A box that does not have a background.
	 */
	Knockout = "knockout",
}

export function applyClassName(className?: string, style?: BoxStyle): string {
	return cx(className, Styles.button, {
		[Styles.regular]: style == null || style === BoxStyle.Regular,
		[Styles.accent]: style === BoxStyle.Accented,
		[Styles.inverted]: style === BoxStyle.Inverted,
		[Styles.knockout]: style === BoxStyle.Knockout,
	});
}
