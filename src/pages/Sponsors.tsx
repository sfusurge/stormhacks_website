import { HackathonInfo, PastSponsors, SponsorInfo, SponsorTier, Sponsors } from "$constants/about";
import cx from "classnames";
import { shuffle } from "fast-shuffle";

import { ComponentProps, Fragment, useMemo } from "react";
import { Trans, useTranslation } from "react-i18next";

import ButtonLink, { ButtonStyle } from "~/ButtonLink";
import Page from "~/Page";
import { SVGComponent } from "~/SVG";
import SponsorGrid from "~/SponsorGrid";
import SponsorLogo from "~/SponsorLogo/component";

import { ReactComponent as CardMegaphone } from "$asset/card-megaphone.svg";
import { ReactComponent as CardStar } from "$asset/card-star.svg";
import { ReactComponent as CardStocks } from "$asset/card-stonks.svg";

import Styles from "./Sponsors.module.scss";

/**
 * The "Sponsors" page.
 *
 * This contains a section explaining how we can be sponsored and the logos of past sponsors.
 */
function SponsorsPage() {
	// This is not directly used.
	return (
		<Page className="width-limited">
			<SponsorsSection />
		</Page>
	);
}

export function SponsorsSection() {
	const { t } = useTranslation();
	return (
		<article className={Styles.container}>
			<h1 className={Styles.title}>{t("sponsors.title")}</h1>
			<SectionWhySponsorUs />
			<ButtonLink
				style={ButtonStyle.Accented}
				className={Styles.sponsorButton}
				href={HackathonInfo.register.sponsor}
				i18n-title="sponsors.button.title">
				{t("sponsors.button.text")}
			</ButtonLink>
			<div className={cx(Styles.section, Styles.sponsors)}>
				<SponsorsGrids />
			</div>
		</article>
	);
}

function SectionWhySponsorUs() {
	const { t } = useTranslation();
	const benefits: Array<[number, SVGComponent]> = [
		[1, CardStocks],
		[2, CardMegaphone],
		[3, CardStar],
	];

	return (
		<div className={cx(Styles.section, Styles.sponsorUs)}>
			<p className={Styles.whySponsorUs}>{t("sponsors.paragraph")}</p>
			<div className={Styles.benefits}>
				{benefits.map(([n, Graphic]) => (
					<Fragment key={n}>
						<div className={Styles.benefitsGraphic}>
							<Graphic />
						</div>
						<h2>{t(`sponsors.benefits.${n}.header`)}</h2>
						<p>
							<Trans i18nKey={`sponsors.benefits.${n}.paragraph`}>
								<strong />
							</Trans>
						</p>
					</Fragment>
				))}
			</div>
		</div>
	);
}

const SortedSponsors = (() => {
	// Collect the sponsors by their tier.
	const byTier = new Map<SponsorTier, Array<SponsorInfo>>();
	Object.entries(SponsorTier).forEach(([_, type]) => typeof type === "number" && byTier.set(type, []));
	Sponsors.forEach((sponsor) => byTier.get(sponsor.type)?.push(sponsor));

	// For fairness, shuffle the sponsors in each respective tier.
	for (const [tier, sponsorsInTier] of byTier) {
		byTier.set(tier, shuffle(sponsorsInTier));
	}

	// Join all the sponsors back together into a single array.
	return Array.from(byTier.entries())
		.sort((a, b) => b[0] - a[0])
		.map(([_, sponsorsInTier]) => sponsorsInTier)
		.flat();
})();

function SponsorsGrids() {
	const { t } = useTranslation();
	return useMemo(() => {
		const common: ComponentProps<typeof SponsorGrid> = {
			aspectRatio: "290:235",
			minItemWidth: 180,
			minItemWidthMobile: 125,
			minColumns: 2,
			maxColumns: 3,
		};

		return (
			<>
				<section>
					<h2>{t("sponsors.sponsors-heading")}</h2>
					<SponsorGrid {...common} maxColumns={2} minItemWidth={250}>
						{SortedSponsors.filter((s) => s.type !== SponsorTier.IN_KIND).map((s) => (
							<SponsorLogo
								key={s.name}
								name={s.name}
								href={s.link}
								logo={(s as any).svg ?? (s as any).photo}
							/>
						))}
					</SponsorGrid>
					<SponsorGrid {...common}>
						{SortedSponsors.filter((s) => s.type === SponsorTier.IN_KIND).map((s) => (
							<SponsorLogo
								key={s.name}
								name={s.name}
								href={s.link}
								logo={(s as any).svg ?? (s as any).photo}
							/>
						))}
					</SponsorGrid>
				</section>
				<section>
					<h2>{t("sponsors.past-sponsors-heading")}</h2>
					<SponsorGrid {...common}>
						{PastSponsors.map((s) => (
							<SponsorLogo key={s.name} name={s.name} logo={(s as any).svg ?? (s as any).photo} />
						))}
					</SponsorGrid>
				</section>
			</>
		);
	}, [t]);
}

export default SponsorsPage;
