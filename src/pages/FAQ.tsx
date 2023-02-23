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
const FAQs = ["example"];

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
	// TODO:
	// https://www.figma.com/file/0NDG2Z2hR9z1cVwtvB8SkF/StormHacks-2023?node-id=5891%3A40&t=ZE4j1r7BKRLQV905-0
	//
	//  - You will need to follow up with other teams to get the list of questions and answers.
	//  - The basic FrequentlyAskedQuestion component has been created. You need to style it.

	const { i18n } = useTranslation();

	// Use a memo so we don't re-render repeatedly.
	const boxes = useMemo(() => {
		return FAQs.map((key) => (
			<FrequentlyAskedQuestion
				i18n={i18n}
				key={key}
				open
				questionKey={`faq.${key}.question`}
				answerKey={`faq.${key}.answer`}
			/>
		));
	}, [i18n]);

	return (
		<article className={Styles.container}>
			<h1 className={Styles.title}>
				<Trans i18nKey={"faq.title"}>
					F<strong>AQ</strong>
				</Trans>
			</h1>
			<div className={cx(Styles.section, Styles.faqs)}>{boxes}</div>
		</article>
	);
}

export default FAQPage;
