import { HackathonInfo, PastSponsors, SponsorInfo, SponsorTier, Sponsors } from "$constants/about";
import cx from "classnames";
import { shuffle } from "fast-shuffle";

import { Fragment, FunctionComponent, ReactElement, SVGProps, useMemo } from "react";
import { Trans, useTranslation } from "react-i18next";

import ButtonLink, { ButtonStyle } from "~/ButtonLink";
import Image from "~/Image";
import Page from "~/Page";

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
	const sponsors = useMemo(
		() => (
			<>
				<SponsorGrid i18nKey="sponsors.sponsors-heading" sponsors={SortedSponsors} />
				<SponsorGrid i18nKey="sponsors.past-sponsors-heading" sponsors={PastSponsors as SponsorInfo[]} />
			</>
		),
		[]
	);

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
			{sponsors}
		</article>
	);
}

function SectionWhySponsorUs() {
	const { t } = useTranslation();
	const benefits = [1, 2, 3];

	return (
		<div className={cx(Styles.section, Styles.sponsorUs)}>
			<p className={Styles.whySponsorUs}>{t("sponsors.paragraph")}</p>
			<div className={Styles.benefits}>
				{benefits.map((n) => (
					<Fragment key={n}>
						<h2>
							<Trans i18nKey={`sponsors.benefits.${n}.header`}>
								<span className={Styles.mobileLineBreaker}>...</span>
							</Trans>
						</h2>
						<p>{t(`sponsors.benefits.${n}.paragraph`)}</p>
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

function SponsorGrid({ i18nKey, sponsors }: { i18nKey: string; sponsors: SponsorInfo[] }) {
	const { t } = useTranslation();

	return (
		<div className={cx(Styles.section, Styles.sponsors)}>
			<h2>{t(i18nKey)}</h2>
			<div className={Styles.sponsorLinks}>
				{sponsors.map((sponsor: SponsorInfo) => (
					<Sponsor {...sponsor} key={sponsor.name} />
				))}
			</div>
		</div>
	);
}

function Sponsor({
	name,
	photo,
	link,
	svg: SVG,
}: {
	name: string;
	link?: string;
	photo?: string;
	svg?: FunctionComponent<SVGProps<SVGSVGElement>>;
}): ReactElement {
	const image = SVG == null ? <Image fallbackSrc={photo as string} alt={name} src={[]} /> : <SVG />;
	return (
		<div>
			{link && (
				<a className={Styles.sponsorLink} href={link} title={link}>
					{image}
				</a>
			)}
			{!link && image}
		</div>
	);
}

export default SponsorsPage;
