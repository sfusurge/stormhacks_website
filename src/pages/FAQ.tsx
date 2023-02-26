import cx from "classnames";

import { useMemo } from "react";
import { Trans, useTranslation } from "react-i18next";

import FrequentlyAskedQuestion from "~/FrequentlyAskedQuestion";
import Page from "~/Page";

import Styles from "./FAQ.module.scss";

/**
 * The list of frequently asked questions to show.
 * Each entry should be the translation key for `faq.[{key}]` in the translation.json file.
 */
const FAQs = [
	"what-is-a-hackathon",
	"what-if-its-my-first-time",
	"who-can-participate",
	"how-many-people-on-a-team",
	"virtual-or-in-person",
	"what-kind-of-activities",
	"what-platform-is-the-event-on",
	"how-will-we-receive-swag",
	"does-admission-cost-money",
	"more-questions",
];

/**
 * The "Frequently Asked Questions" page.
 *
 * This contains a list of frequently asked questions.
 */
function FAQPage() {
	// This is not directly used.
	return (
		<Page className="width-limited">
			<FAQSection />
		</Page>
	);
}

export function FAQSection() {
	const { i18n } = useTranslation();

	// Use a memo so we don't re-render repeatedly.
	const boxes = useMemo(() => {
		return FAQs.map((key) => (
			<FrequentlyAskedQuestion
				i18n={i18n}
				key={key}
				className={Styles.faqBox}
				questionKey={`faqs.${key}.question`}
				answerKey={`faqs.${key}.answer`}
			/>
		));
	}, [i18n]);

	return (
		<article className={Styles.container}>
			<h1 className={Styles.title}>
				<Trans i18nKey={"faqs.title"}>
					F<strong>AQ</strong>
				</Trans>
			</h1>
			<div className={cx(Styles.section, Styles.faqs)}>{boxes}</div>
		</article>
	);
}

export default FAQPage;
