import { isHackerApplicationOpen } from "$constants/about";

import React from "react";
import { useTranslation } from "react-i18next";

import ButtonLink from "~/ButtonLink";
import { useUpdatingTimeSpan } from "~/TimeSpan";

import Styles from "./Header.module.scss";

interface Props {}

function HeaderApplyButton(_props: Props, ref: React.Ref<HTMLElement>) {
	const { t } = useTranslation();
	const [open, opensAt] = isHackerApplicationOpen();
	const _ts = useUpdatingTimeSpan(() => new Date(), opensAt); // Needed for its side effect of re-rendering the component.

	return (
		<div className={Styles.headerStickyRight}>
			{open === "opened" && (
				<ButtonLink
					href="/apply"
					ref={ref as React.Ref<HTMLDivElement>}
					i18n-title="header.apply.title"
					className={Styles.applyButton}>
					<span className={Styles.applyButtonDesktop}>{t("header.apply.text-on-desktop")}</span>
					<span className={Styles.applyButtonMobile}>{t("header.apply.text-on-mobile")}</span>
				</ButtonLink>
			)}
		</div>
	);
}

export default React.forwardRef(HeaderApplyButton);
