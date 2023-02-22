import { Sponsors } from "$constants/about";
import cx from "classnames";

import { useMemo } from "react";
import { useTranslation } from "react-i18next";

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
		<Page>
			<SponsorsSection />
		</Page>
	);
}

export function SponsorsSection() {
	const { t } = useTranslation();
	const previousSponsors = useMemo(() => <SectionPreviousSponsors />, []);

	// TODO: This section.
	return (
		<article className={Styles.container}>
			<h1 className={Styles.title}>{t("sponsors.title")}</h1>
			<SectionWhySponsorUs />
			{previousSponsors}
		</article>
	);
}

function SectionWhySponsorUs() {
	return <div className={cx(Styles.section, Styles.sponsorUs)}>TODO: SectionWhySponsorUs</div>;
}

function SectionPreviousSponsors() {
	// TODO: Create a component instead of the map function.
	return (
		<div className={cx(Styles.section, Styles.sponsors)}>
			{Sponsors.map((sponsor) => {
				return (
					<div>
						{sponsor.name}
						<img alt={sponsor.name} src={sponsor.photo} />
					</div>
				);
			})}
		</div>
	);
}

export default SponsorsPage;
