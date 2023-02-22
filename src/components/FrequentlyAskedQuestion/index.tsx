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
	 * If provided and true, the answer box will be open by default.
	 */
	open?: boolean;

	/**
	 * The i18n object.
	 * Optional.
	 */
	i18n?: i18n;
};

/**
 * A details box containing a frequently asked question.
 */
function FrequentlyAskedQuestion({ questionKey, answerKey, open, i18n }: FrequentlyAskedQuestionProps) {
	const useTranslationT = useTranslation();
	const t = i18n?.t ?? useTranslationT.t;

	return (
		<div className={Styles.component}>
			<details open={open}>
				<summary className={Styles.question}>{t(questionKey)}</summary>
				<div className={Styles.answer}>{t(answerKey)}</div>
			</details>
		</div>
	);
}

export default FrequentlyAskedQuestion;
