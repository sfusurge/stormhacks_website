import cx from "classnames";

import { FunctionComponent, SVGProps } from "react";

import Styles from "./svg.module.scss";

/**
 * A SVG component imported from webpack using `import {ReactComponent} from "/path/to/a.svg"`.
 */
export type SVGComponent = FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;

/**
 * An inline SVG.
 *
 * This SVG will be sized to the line-height of its neighbouring text.
 */
export function InlineSVG(props: { svg: SVGComponent; className?: string; title?: string }) {
	return (
		<div className={cx(Styles.inline, props.className)}>
			<props.svg className={Styles.inline} title={props.title}></props.svg>
		</div>
	);
}

export default InlineSVG;
