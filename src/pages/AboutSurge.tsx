import { SurgeInfo } from "$constants/about";
import cx from "classnames";

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
	// This is not directly used.
	return (
		<Page>
			<AboutSurgeSection />
		</Page>
	);
}

export function AboutSurgeSection() {
	// TODO:
	// https://www.figma.com/file/0NDG2Z2hR9z1cVwtvB8SkF/StormHacks-2023?node-id=5891%3A40&t=ZE4j1r7BKRLQV905-0
	//
	// Make sure the text is localized.
	// See https://www.i18next.com/translation-function/interpolation

	// TODO: This section.
	return (
		<article className={Styles.container}>
			<h1>Title Here</h1>
			<SectionAbout />
			<SectionExecs />
		</article>
	);
}

function SectionAbout() {
	// TODO:
	// https://www.figma.com/file/0NDG2Z2hR9z1cVwtvB8SkF/StormHacks-2023?node-id=5891%3A40&t=ZE4j1r7BKRLQV905-0
	//
	//  Box 1:
	//    - [Icon] "{{participants}}+ Total Hackers"
	//    - [Icon] "{{Math.floor(prizes / 1000)}}k+ Prize Value"
	//    - [Icon] "{{projects}}+ Diverse Projects"
	//
	//  Box 2:
	//    Title: "New This Year" (use CSS to capitalize)
	//    - [Icon] "{{"
	//
	// Make sure the text is localized.
	// See https://www.i18next.com/translation-function/interpolation
	return (
		<div className={cx(Styles.section, Styles.about)}>
			{/* TODO */}
			TODO: SectionAbout
		</div>
	);
}

function SectionExecs() {
	// This creates an <ExecPhoto> for every exec in the `about.jsonc` file.
	return (
		<div className={cx(Styles.section, Styles.execs)}>
			<div className={Styles.execGrid}>{[SurgeExecs.map((exec) => <ExecPhoto key={exec.name} {...exec} />)]}</div>
		</div>
	);
}

export default AboutSurgePage;
