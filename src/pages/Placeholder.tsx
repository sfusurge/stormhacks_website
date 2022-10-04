import React from "react";
import { useTranslation } from "react-i18next";

import { ReactComponent as Stormy } from "$asset/stormy.svg";

import Styles from "./Placeholder.module.scss";

/**
 * The placeholder page used while the full website is still under development.
 */
function Placeholder() {
	const { t } = useTranslation();
	return (
		<main>
			<div className={Styles.stormy}>
				<Stormy />
			</div>
			<div className={Styles.info}>
				<div>{t("placeholder.main")} </div>
				<div>{t("placeholder.timeline")} </div>
				<div>{t("placeholder.thanks")} </div>
			</div>
			<div className={Styles.link}>
				<a href={"https://archive.stormhacks.com/"}>{t("visitArchive")}</a>
			</div>
		</main>
	);
}

export default Placeholder;
