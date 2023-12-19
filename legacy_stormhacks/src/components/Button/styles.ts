import cx from "classnames";

import Styles from "./Button.module.scss";

/**
 * Available style of buttons.
 */
export const enum ButtonStyle {
	/**
	 * A regular button with a primary background color and inverted foreground color.
	 */
	Regular = "regular",

	/**
	 * An accent button that uses the accent color.
	 */
	Accented = "accent",

	/**
	 * A button that does not have a background.
	 */
	Knockout = "knockout",
}

export function applyClassName(className?: string, style?: ButtonStyle): string {
	return cx(className, Styles.button, {
		[Styles.regular]: style == null || style === ButtonStyle.Regular,
		[Styles.accent]: style === ButtonStyle.Accented,
		[Styles.knockout]: style === ButtonStyle.Knockout,
	});
}
