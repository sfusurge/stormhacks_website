import cx from "classnames";

import { Trans, useTranslation } from "react-i18next";

import Page from "~/Page";
import InlineSVG from "~/SVG";

import { ReactComponent as CardClipboard } from "$asset/card-clipboard.svg";
import { ReactComponent as CardCode } from "$asset/card-code.svg";
import { ReactComponent as CardPen } from "$asset/card-pen.svg";
import { ReactComponent as IconFountainPen } from "$asset/icon/fountain-pen.svg";

import Styles from "./AboutStormhacks.module.scss";

/**
 * The "About Stormhacks" page.
 *
 * This contains a.
 */
function AboutStormhacksPage() {
	return (
		<>
			<Page className="width-limited">
				<AboutStormhacksSection />
			</Page>
			<div>
				<Page className="width-limited">
					<CountdownSection />
				</Page>
			</div>
		</>
	);
}

export function AboutStormhacksSection() {
	const { t } = useTranslation();
	return (
		<article className={cx(Styles.section, Styles.aboutStormhacks)}>
			{/* "Beginner-Friendly" Section */}
			<div className={Styles.leftToRight}>
				<div>
					<h1>{t("about-stormhacks.title")}</h1>
					<h2>{t("about-stormhacks.beginner-friendly.heading")}</h2>
					<p>{t("about-stormhacks.beginner-friendly.text")}</p>
				</div>
				<div className={Styles.imageGrid}>
					<img
						className={cx(Styles.photo, Styles.topLeft)}
						src="/photos/event-1.jpg"
						alt="Teams working at StormHacks 2022."
						style={{ aspectRatio: "298/165" }}
						width={298}
						height={165}
					/>
					<img
						className={cx(Styles.photo, Styles.bottomLeft)}
						src="/photos/event-2.jpg"
						alt="Workshops at StormHacks 2022."
						style={{ aspectRatio: "298/149" }}
						width={298}
						height={149}
					/>
					<img
						className={cx(Styles.photo, Styles.right)}
						src="/photos/event-3.jpg"
						alt="StormHacks 2022."
						style={{ aspectRatio: "302/339" }}
						width={302}
						height={339}
					/>
					<div className={Styles.imageSubtitle}>{t("about-stormhacks.beginner-friendly.image-subtitle")}</div>
				</div>
			</div>

			{/* "Coding is not a Must Have" Section */}
			<div className={Styles.rightToLeft}>
				<div>
					<h2>
						<Trans
							t={t}
							i18nKey="about-stormhacks.coding-not-required.heading"
							components={{ icon: <InlineSVG svg={IconFountainPen} /> }}
						/>
					</h2>
					<p>{t("about-stormhacks.coding-not-required.text-1")}</p>
					<p>{t("about-stormhacks.coding-not-required.text-2")}</p>
				</div>
				<div className={Styles.cardGraphics}>
					<div className={Styles.cardGraphicContainer}>
						<CardPen />
					</div>
					<div className={Styles.cardGraphicContainer}>
						<CardClipboard />
					</div>
					<div className={Styles.cardGraphicContainer}>
						<CardCode />
					</div>
				</div>
			</div>
		</article>
	);
}

export function CountdownSection() {
	const { t } = useTranslation();
	return <article className={Styles.container}>{/* <h1>{t("about-stormhacks.title")}</h1> */}</article>;
}

export default AboutStormhacksPage;
