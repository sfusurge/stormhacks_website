import { SurgeInfo } from "$constants/about";
import cx from "classnames";

import { useTranslation } from "react-i18next";

import ExecPhoto from "~/ExecPhoto";
import Page from "~/Page";

import Styles from "./AboutSurge.module.scss";

const SurgeExecs = SurgeInfo.execs;

/**
 * The "About Surge" page.
 *
 * This contains some info about SFU Surge and pictures of our current exec team.
 */
function AboutSurgePage() {
	return (
		<Page className="width-limited">
			<AboutSurgeSection />
		</Page>
	);
}

export function AboutSurgeSection() {
	const { t } = useTranslation();
	return (
		<article className={Styles.container}>
			<h1>{t("about-surge.title")}</h1>
			<SectionAbout />
			<SectionExecs />
		</article>
	);
}

function SectionAbout() {
	const { t } = useTranslation();
	return (
		<div className={cx(Styles.section, Styles.about)}>
			<p>{t("about-surge.paragraph.0")}</p>
			<p>{t("about-surge.paragraph.1")}</p>
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
