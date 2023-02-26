import cx from "classnames";
import { i18n } from "i18next";

import { useTranslation } from "react-i18next";

import Styles from "./FrequentlyAskedQuestion.module.scss";

export type FrequentlyAskedQuestionProps = {
	/**
	 * The translation key for the question.
	 */
	questionKey: string;

	/**
	 * The translation key for the answer.
	 */
	answerKey: string;

	/**
	 * The i18n object.
	 * Optional.
	 */
	i18n?: i18n;

	className?: string;
};

/**
 * A details box containing a frequently asked question.
 */
function FrequentlyAskedQuestion({ questionKey, answerKey, i18n, className }: FrequentlyAskedQuestionProps) {
	const useTranslationT = useTranslation();
	const t = i18n?.t ?? useTranslationT.t;

	return (
		<div className={cx(Styles.component, className)}>
			<div className={Styles.details} data-open={true}>
				<summary className={Styles.question}>{t(questionKey)}</summary>
				<div className={Styles.answer}>{t(answerKey)}</div>
			</div>
		</div>
	);
}

export default FrequentlyAskedQuestion;
