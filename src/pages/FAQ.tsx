import cx from "classnames";

import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import FrequentlyAskedQuestion from "~/FrequentlyAskedQuestion";
import Page from "~/Page";

import Styles from "./FAQ.module.scss";

/**
 * The list of frequently asked questions to show.
 * Each entry should be the translation key for `faq.[{key}]` in the translation.json file.
 */
const FAQs = [
	"what-is-a-hackathon",
	"when-and-where-is-the-event",
	"first-day",
	"does-admission-cost-money",
	"what-if-its-my-first-time",
	"when-do-applications-open",
	"finding-team-members",
	"when-can-i-start",
	"what-can-i-work-on",
	"what-should-i-bring",
	"admission-requirements",
	"travel-reimbursements",
	"limitations-postsecondary",
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
	const { i18n, t } = useTranslation();

	// Use a memo so we don't re-render repeatedly.
	const boxes = useMemo(() => {
		return FAQs.map((key) => (
			<FrequentlyAskedQuestion
				i18n={i18n}
				key={key}
				className={Styles.faqBox}
				collapsible={true}
				collapsed={true}
				questionKey={`faqs.${key}.question`}
				answerKey={`faqs.${key}.answer`}
			/>
		));
	}, [i18n]);

	return (
		<article className={Styles.container}>
			<h1 className={Styles.title}>{t("faqs.title")}</h1>
			<div className={cx(Styles.section, Styles.faqs)}>
				<div className={Styles.columnLeft}>{boxes.filter((_, i) => (i & 1) === 0)}</div>
				<div className={Styles.columnRight}>{boxes.filter((_, i) => (i & 1) === 1)}</div>
			</div>
		</article>
	);
}

export default FAQPage;
