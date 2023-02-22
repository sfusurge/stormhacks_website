import { HackathonInfo } from "$constants/about";
import cx from "classnames";

import Page from "~/Page";

import Styles from "./AboutStormhacks.module.scss";

const _Participants = HackathonInfo.participants.count;
const _Projects = HackathonInfo.projects.count;
const _Prizes = HackathonInfo.prizes.value;
const _Duration = HackathonInfo.time.hours;

/**
 * The "About StormHacks" page.
 *
 * This contains the StormHacks logo, event date and time, and card graphic.
 * In addition, it
 */
function AboutStormhacksPage() {
	// This is not directly used.
	return (
		<Page>
			<AboutStormhacksSection />
		</Page>
	);
}

export function AboutStormhacksSection() {
	// TODO: This section.
	return (
		<article className={Styles.container}>
			<div className={cx(Styles.section, Styles.primary)}>
				<SectionLogo />
				<SectionGraphic />
				<SectionApplyForms />
			</div>
			<div className={cx(Styles.section, Styles.about)}>
				<SectionAbout />
			</div>
		</article>
	);
}

function SectionLogo() {
	return <span>TODO: SectionLogo</span>;
}

function SectionGraphic() {
	return <figure>TODO: SectionGraphic</figure>;
}

function SectionApplyForms() {
	return <span>TODO: SectionApplyForms</span>;
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
	//    - [Icon] "{{duration}} hours"
	//    - [Icon] "In-Person"
	//
	// Make sure the text is localized.
	// See https://www.i18next.com/translation-function/interpolation
	return <span>TODO: SectionAbout</span>;
}

export default AboutStormhacksPage;
