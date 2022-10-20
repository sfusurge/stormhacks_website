import { FunctionComponent, SVGProps } from "react";

import Styles from "./svg.module.scss";

type SVGComponent = FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;

/**
 * An inline SVG.
 *
 * This SVG will be sized to the line-height of its neighbouring text.
 */
export function InlineSVG(props: { svg: SVGComponent; title?: string }) {
	return (
		<div className={Styles.inline}>
			<props.svg className={Styles.inline} title={props.title}></props.svg>
		</div>
	);
}

export default InlineSVG;
