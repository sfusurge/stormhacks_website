import { Trans, useTranslation } from "react-i18next";

import Page from "~/Page";
import { InlineSVG } from "~/SVG";
import { Surge } from "~/Surge";

import { ReactComponent as StormHacksIcon } from "$asset/stormhacks-icon.svg";

import Styles from "./Placeholder.module.scss";

/**
 * The placeholder page used while the full website is still under development.
 */
function Placeholder() {
	const { t } = useTranslation();
	return (
		<Page>
			{/* Hosted By SFU Surge */}
			<aside>
				<div className={Styles.hostedBy}>
					<Trans
						i18nKey={"placeholder.hosted-by"}
						components={{
							surge: <Surge hasLink hasIcon />,
						}}
					/>
				</div>
			</aside>

			{/* Header */}
			<header className={Styles.header}>
				<h1>
					{t("brand.stormhacks")} <InlineSVG svg={StormHacksIcon} />
				</h1>
				<h2>{t("brand.stormhacks-slogan")}</h2>
			</header>

			{/* Body */}
			<main className={Styles.main}>
				<div className={Styles.message}>
					<div>{t("placeholder.message")} </div>
				</div>
				<div className={Styles.archiveLink}>
					<a href={"https://archive.stormhacks.com/"}>{t("placeholder.visit-archive")}</a>
				</div>
			</main>
		</Page>
	);
}

export default Placeholder;
