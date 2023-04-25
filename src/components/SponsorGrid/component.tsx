import cx from "classnames";

import { PropsWithChildren, ReactElement } from "react";

import Styles from "./SponsorGrid.module.scss";

type SponsorGridProps = PropsWithChildren<{
	/**
	 * Additional class names to apply to the element.
	 */
	className?: string;

	/**
	 * The desired aspect ratio for items in the grid.
	 */
	aspectRatio: `${number}:${number}`;

	minItemWidth?: number;
	minItemWidthMobile?: number;
	minColumns: number;
	maxColumns: number;
}>;

const TEMPLATE_COLUMN =
	"minmax(max(var(--sponsor-grid-current-item-min-width), var(--sponsor-grid-calc-max-width)), 1fr)";

/**
 * A grid of sponsors.
 *
 * Each sponsor should be provided as a child element.
 */
export default function SponsorGrid({
	aspectRatio,
	className,
	children,
	minColumns,
	maxColumns,
	minItemWidth,
	minItemWidthMobile,
}: SponsorGridProps): ReactElement {
	const actualMinItemWidth = minItemWidth ?? aspectRatio.split(":")[0];
	return (
		<div
			className={cx(Styles.component, className)}
			style={
				{
					"--sponsor-grid-aspect-ratio": aspectRatio.replace(":", "/"),
					"--sponsor-grid-item-min-width": `${actualMinItemWidth}px`,
					"--sponsor-grid-item-min-width-mobile": `${minItemWidthMobile ?? actualMinItemWidth}px`,
					"--sponsor-grid-fixed-template-columns": new Array(minColumns - 1).fill(TEMPLATE_COLUMN).join(" "),
					"--sponsor-grid-min-columns": `${minColumns}`,
					"--sponsor-grid-max-columns": `${maxColumns}`,
				} as any
			}>
			{children}
		</div>
	);
}
