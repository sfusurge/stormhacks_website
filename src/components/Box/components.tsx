import cx from "classnames";

import React from "react";
import { PropsWithChildren, ReactElement } from "react";

import Styles from "./Box.module.scss";
import { BoxLabelPosition, BoxStyle, applyClassName } from "./styles";

export type BoxProps = PropsWithChildren<{
	style?: BoxStyle;

	className?: string;
}>;

// Type IDs.
// We need this because we can't directly compare types when using hot module reloading.
const TypeID = "%ComponentType";
const BoxTitleID = 0;
const BoxBodyID = 1;
const BoxLabelID = 2;

/**
 * The title of the box.
 */
export function BoxTitle({ className, children }: PropsWithChildren<{ className?: string }>): ReactElement {
	return <div className={cx(Styles.title, className)}>{children}</div>;
}

BoxTitle[TypeID] = BoxTitleID;

/**
 * The body of the box.
 */
export function BoxBody({ className, children }: PropsWithChildren<{ className?: string }>): ReactElement {
	return <div className={cx(Styles.body, className)}>{children}</div>;
}

BoxBody[TypeID] = BoxBodyID;

/**
 * A label to add to the box.
 */
export function BoxLabel({
	className,
	children,
	position,
}: PropsWithChildren<{ className?: string; position: BoxLabelPosition }>): ReactElement {
	return <div className={cx(Styles.label, className, Styles[position])}>{children}</div>;
}

BoxLabel[TypeID] = BoxLabelID;

/**
 * A basic, stylized box that can be composed into different components.
 */
function Box({ style, className, children }: BoxProps): ReactElement {
	const childrenArray = children instanceof Array ? [...children] : [children];

	const titleIndex = childrenArray.findIndex((c) => c?.type?.[TypeID] === BoxTitleID);
	const title = titleIndex === -1 ? null : childrenArray.splice(titleIndex, 1);

	const labelIndex = childrenArray.findIndex((c) => c?.type?.[TypeID] === BoxLabelID);
	const label = labelIndex === -1 ? null : childrenArray.splice(labelIndex, 1);

	let body = childrenArray.find((c) => c?.type?.[TypeID] === BoxBodyID);
	if (body == null) {
		body = <BoxBody>{childrenArray}</BoxBody>;
	}

	return (
		<div className={cx(Styles.component, applyClassName(className, style))}>
			{label}
			{title}
			{body}
		</div>
	);
}

export default Box;
