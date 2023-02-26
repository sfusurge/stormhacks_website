import { HackathonInfo } from "$constants/about";
import cx from "classnames";

import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { BoxLabelPosition, BoxStyle } from "~/Box";
import { ButtonStyle } from "~/Button";
import ButtonLink from "~/ButtonLink";
import EventStatBox from "~/EventStatBox";
import Page from "~/Page";

import { ReactComponent as Cards } from "$asset/cards.svg";
import { ReactComponent as IconGlobe } from "$asset/icon/globe.svg";
import { ReactComponent as IconPerson } from "$asset/icon/person.svg";
import { ReactComponent as IconTimer } from "$asset/icon/timer.svg";
import { ReactComponent as IconTrophy } from "$asset/icon/trophy.svg";
import { ReactComponent as SQBottomLeft } from "$asset/squares-bottom-left.svg";
import { ReactComponent as SQTopRight } from "$asset/squares-top-right.svg";

import Styles from "./AboutStormhacks.module.scss";

const Participants = HackathonInfo.participants.count;
const Projects = HackathonInfo.projects.count;
const Prizes = HackathonInfo.prizes.value;
const Duration = HackathonInfo.time.hours;

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
			<div className={cx(Styles.section, Styles.stats)}>
				<SectionEventStats />
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
				<ButtonLink style={ButtonStyle.Accented} href="/apply" i18n-title="event.links.apply.title">
					{t("event.links.apply.text")}
				</ButtonLink>
				<ButtonLink style={ButtonStyle.Knockout} href="/apply-mentor" i18n-title="event.links.mentor.title">
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

function SectionEventStats() {
	return (
		<>
			<div className={Styles.projectsAndParticipants}>
				<EventStatBox
					className={Styles.statsBox}
					style={BoxStyle.Inverted}
					stats={[
						{
							icon: IconPerson,
							"i18n-key": "event.info.participants",
							"i18n-props": { number: Participants },
						},
						{
							icon: IconTrophy,
							"i18n-key": "event.info.prizes",
							"i18n-props": { value: Math.floor(Prizes / 1000) },
						},
						{
							icon: IconTrophy,
							"i18n-key": "event.info.projects",
							"i18n-props": { number: Projects },
						},
					]}>
					<SQBottomLeft className={cx(Styles.boxesGraphic, Styles.boxesGraphicBottomLeft)} />
					<SQTopRight className={cx(Styles.boxesGraphic, Styles.boxesGraphicTopRight)} />
				</EventStatBox>
			</div>
			<div className={Styles.placeAndTime}>
				<EventStatBox
					className={Styles.statsBox}
					label-i18n-key="event.info.new-this-year-label"
					label-position={BoxLabelPosition.TopRight}
					label-className={Styles.statsBoxLabel}
					stats={[
						{
							icon: IconTimer,
							"i18n-key": "event.info.duration",
							"i18n-props": { number: Duration },
						},
						{
							icon: IconGlobe,
							"i18n-key": "event.info.location",
						},
					]}></EventStatBox>
			</div>
		</>
	);
}

export default AboutStormhacksPage;
