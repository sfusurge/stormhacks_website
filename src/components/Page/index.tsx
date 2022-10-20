import React, { PropsWithChildren } from "react";

import Styles from "./page.module.scss";

/**
 * A page.
 *
 * This adds margins.
 */
function Page(props: PropsWithChildren<{}>) {
	return <div className={Styles.page}>{props.children}</div>;
}

export default Page;
