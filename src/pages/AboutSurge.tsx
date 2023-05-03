import { SurgeInfo } from "$constants/about";
import cx from "classnames";

import { useTranslation } from "react-i18next";

import ExecPhoto from "~/ExecPhoto";
import Page from "~/Page";

import { ReactComponent as HeartGraphic } from "$asset/giant-heart.svg";
import { ReactComponent as OtterLeft } from "$asset/otter-left.svg";
import { ReactComponent as OtterRight } from "$asset/otter-right.svg";

import Styles from "./AboutSurge.module.scss";

const SurgeExecs = SurgeInfo.execs;

/**
 * The "About Surge" page.
 *
 * This contains some info about SFU Surge and pictures of our current exec team.
 */
function AboutSurgePage() {
	return (
		<Page className={cx("width-limited", Styles.page)}>
			<AboutSurgeSection />
		</Page>
	);
}

export function AboutSurgeSection() {
	return (
		<article className={Styles.container}>
			<SectionAbout />
			<SectionExecs />
		</article>
	);
}

function SectionAbout() {
	const { t } = useTranslation();
	return (
		<div className={cx(Styles.section, Styles.about)}>
			<OtterLeft className={Styles.otterLeft} />
			<OtterRight className={Styles.otterRight} />
			<div className={Styles.graphic}>
				<HeartGraphic />
				<HeartGraphic className={Styles.blurred} />
			</div>
			<div className={Styles.description}>
				<h1>{t("about-surge.title")}</h1>
				<p>{t("about-surge.paragraph.0")}</p>
				<p>{t("about-surge.paragraph.1")}</p>
			</div>
		</div>
	);
}

function SectionExecs() {
	return (
		<div className={cx(Styles.section, Styles.execs)}>
			<div className={Styles.execGridContainer}>
				<div className={Styles.execGrid}>
					{[SurgeExecs.map((exec) => <ExecPhoto key={exec.name} {...exec} />)]}
				</div>
			</div>
		</div>
	);
}

export default AboutSurgePage;
