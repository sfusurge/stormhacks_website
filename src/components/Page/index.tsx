import cx from "classnames";

import React, { PropsWithChildren } from "react";

import Styles from "./page.module.scss";

/**
 * A page.
 *
 * This adds margins.
 */
function Page({
	className,
	children,
}: PropsWithChildren<{
	className?: string;
}>) {
	return <div className={cx(Styles.page, className)}>{children}</div>;
}

export default Page;
