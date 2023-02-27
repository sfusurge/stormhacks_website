import { useTranslation } from "react-i18next";

import { useApplicationFormsTimespan } from "~/ApplyButton";
import ButtonLink from "~/ButtonLink";

import Styles from "./Header.module.scss";

function HeaderApplyButton() {
	const { t } = useTranslation();
	const ts = useApplicationFormsTimespan("hacker");
	return (
		<div className={Styles.headerStickyRight}>
			{ts.state === "opened" && (
				<ButtonLink href="/apply" i18n-title="header.apply.title" className={Styles.applyButton}>
					<span className={Styles.applyButtonDesktop}>{t("header.apply.text-on-desktop")}</span>
					<span className={Styles.applyButtonMobile}>{t("header.apply.text-on-mobile")}</span>
				</ButtonLink>
			)}
		</div>
	);
}

export default HeaderApplyButton;
