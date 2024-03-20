import { HackathonInfo, isHackerApplicationOpen, isMentorApplicationOpen } from "$constants/about";
import cx from "classnames";

import { Trans, useTranslation } from "react-i18next";

import { BoxLabelPosition, BoxStyle } from "~/Box";
import { ButtonStyle } from "~/Button";
import ButtonLink from "~/ButtonLink";
import EventStatBox from "~/EventStatBox";
import Page from "~/Page";
import { Now, formatTimeSpan, useUpdatingTimeSpan } from "~/TimeSpan";

import { ReactComponent as Otter } from "$asset/ar-otter.svg";
import { ReactComponent as IconGlobe } from "$asset/icon/globe.svg";
import { ReactComponent as IconPerson } from "$asset/icon/person.svg";
import { ReactComponent as IconTimer } from "$asset/icon/timer.svg";
import { ReactComponent as IconTrophy } from "$asset/icon/trophy.svg";

import Styles from "./Intro.module.scss";

const Participants = HackathonInfo.participants.count;
const Projects = HackathonInfo.projects.count;
const Prizes = HackathonInfo.prizes.value;
const Duration = HackathonInfo.time.hours;

/**
 * The "Intro" page.
 *
 * This contains the StormHacks logo, event date and time, and VR otter graphic.
 */
function IntroPage() {
	return (
		<Page className="width-limited">
			<IntroSection />
		</Page>
	);
}

export function IntroSection() {
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
	function ClippedStormHacks({ className }: { className?: string }) {
		return (
			<>
				<div className={cx(Styles.logoClipBox, className)}>
					<div className={Styles.logo}>
						<span>Storm</span>
						<span>Hacks</span>
					</div>
				</div>
			</>
		);
	}

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
			<div className={Styles.logoBoxLineV} />
			<div className={Styles.logoStormhacksContainer}>
				<div className={Styles.asGlow}>
					<ClippedStormHacks />
				</div>
				<ClippedStormHacks />
			</div>
			<div className={Styles.logoSubtitleContainer}>
				<div className={Styles.logoBoxLineH} />
				<div className={Styles.logoSubtitle}>
					<div className={Styles.logoSubtitleLine} />
					<div className={Styles.logoSubtitleText}>{t("brand.stormhacks-theme")}</div>
				</div>
			</div>
		</div>
	);
}

function ThemeGraphic() {
	return (
		<figure className={Styles.themeGraphic}>
			<Otter />
		</figure>
	);
}

function SectionApplyForms() {
	const { t } = useTranslation();

	return (
		<>
			<div className={Styles.applyFormsButtons}>
				<ApplyAsHackerButton />
				<ApplyAsMentorButton />
			</div>
			<div className={Styles.applyFormsLinks}>
				<a href={HackathonInfo.register.volunteer} title={t("event.links.volunteer.title")}>
					{t("event.links.volunteer.text")}
				</a>
			</div>
		</>
	);
}

function ApplyAsHackerButton() {
	const [hackerFormOpen, hackerFormOpensAt] = isHackerApplicationOpen();
	const hackerTs = useUpdatingTimeSpan(Now, hackerFormOpensAt);

	const { t } = useTranslation();
	// const tVariant = `text-${hackerFormOpen}${hackerTs == null || hackerFormOpen === "closed" ? "" : "-with-time"}`;

	return (
		<ButtonLink
			style={ButtonStyle.Accented}
			href={hackerFormOpen === "opened" ? "/apply" : "#"}
			i18n-title="event.links.apply.title"
			className={hackerFormOpen === "opened" ? undefined : Styles.applyButtonClosed}>
			{t(`event.links.apply.text-pre-open`, { time: formatTimeSpan(t, hackerTs) })}
		</ButtonLink>
	);
}

function ApplyAsMentorButton() {
	const [mentorFormOpen, mentorFormOpensAt] = isMentorApplicationOpen();
	const mentorTs = useUpdatingTimeSpan(Now, mentorFormOpensAt);

	const { t } = useTranslation();
	const tVariant = `text-${mentorFormOpen}${mentorTs == null ? "" : "-with-time"}`;

	const shouldShowMentorButton =
		mentorFormOpen === "opened" || (mentorFormOpen === "pre-open" && mentorFormOpensAt != null);

	if (!shouldShowMentorButton) return <></>;

	return (
		<ButtonLink
			style={ButtonStyle.Knockout}
			href={mentorFormOpen === "opened" ? "/apply-mentor" : "#"}
			i18n-title="event.links.mentor.title"
			className={mentorFormOpen === "opened" ? undefined : Styles.applyButtonClosed}>
			{t(`event.links.mentor.${tVariant}`, { time: formatTimeSpan(t, mentorTs) })}
		</ButtonLink>
	);
}

function SectionEventStats() {
	return (
		<>
			<div className={Styles.lastYear}>
				<EventStatBox
					className={Styles.statsBox}
					label-i18n-key="event.info.last-year-label"
					label-position={BoxLabelPosition.TopLeft}
					label-className={Styles.statsBoxLabel}
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
					]}></EventStatBox>
			</div>
			<div className={Styles.thisYear}>
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

export default IntroPage;
