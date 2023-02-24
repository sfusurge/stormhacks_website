import { HackathonInfo } from "$constants/about";
import cx from "classnames";

import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Button, { ButtonStyle } from "~/Button";
import ButtonLink from "~/ButtonLink";
import Page from "~/Page";

import { ReactComponent as Cards } from "$asset/cards.svg";

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
		<Page className="width-limited">
			<AboutStormhacksSection />
		</Page>
	);
}

export function AboutStormhacksSection() {
	return (
		<article className={Styles.container}>
			<div className={cx(Styles.section, Styles.graphics)}>
				<ThemeGraphic />
				<Logo />
			</div>
			<div className={(Styles.section, Styles.applyForms)}>
				<SectionApplyForms />
			</div>
			<div className={cx(Styles.section, Styles.eventInfo)}>
				<SectionEventInfo />
			</div>
		</article>
	);
}

function Logo() {
	const { t } = useTranslation();
	return (
		<div className={Styles.logoBox}>
			<div className={Styles.logoPlace}>
				<Trans i18nKey="event.date-and-location">
					DATE
					<span className={Styles.eventType}>In-Person</span>
					<span className={Styles.eventLocation}>Location</span>
				</Trans>
			</div>
			<div className={Styles.logoClipBox}>
				<div className={Styles.logo}>
					<span>Storm</span>
					<span>Hacks</span>
				</div>
			</div>
			<div className={Styles.logoSubtitle}>
				<div className={Styles.logoSubtitleLine} />
				<div className={Styles.logoSubtitleText}>{t("brand.stormhacks-theme")}</div>
			</div>
		</div>
	);
}

function ThemeGraphic() {
	return (
		<figure className={Styles.themeGraphic}>
			<Cards />
		</figure>
	);
}

function SectionApplyForms() {
	const { t } = useTranslation();
	return (
		<>
			<div className={Styles.applyFormsButtons}>
				<ButtonLink style={ButtonStyle.Accented} href="#" i18n-title="event.links.apply.title">
					{t("event.links.apply.text")}
				</ButtonLink>
				<ButtonLink style={ButtonStyle.Knockout} href="#" i18n-title="event.links.mentor.title">
					{t("event.links.mentor.text")}
				</ButtonLink>
			</div>
			<div className={Styles.applyFormsLinks}>
				<Link to={"#"} title={t("event.links.sponsor.title")}>
					{t("event.links.sponsor.text")}
				</Link>
			</div>
		</>
	);
}

function SectionEventInfo() {
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
