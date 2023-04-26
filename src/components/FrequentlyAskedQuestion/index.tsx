import cx from "classnames";
import { i18n } from "i18next";

import { ReactElement, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import Box, { BoxBody, BoxStyle, BoxTitle } from "~/Box";

import Styles from "./FrequentlyAskedQuestion.module.scss";
import { ReactComponent as Chevron } from "./chevron.svg";

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

	/**
	 * If true, the frequently asked question box may be collapsed.
	 */
	collapsible?: boolean;

	/**
	 * If collapsible, should the box start in a collapsed state?
	 */
	collapsed?: boolean;

	className?: string;
};

/**
 * A details box containing a frequently asked question.
 */
function FrequentlyAskedQuestion({
	questionKey,
	answerKey,
	i18n,
	className,
	collapsible,
	collapsed: startCollapsed,
}: FrequentlyAskedQuestionProps) {
	const useTranslationT = useTranslation();
	const t = i18n?.t ?? useTranslationT.t;

	const [collapsed, setCollapsed] = useState<boolean>(startCollapsed ?? false);
	const onClick = useCallback(() => {
		setCollapsed((v) => !v);
	}, [setCollapsed]);

	return (
		<Box
			style={BoxStyle.Knockout}
			className={cx(Styles.component, className, {
				[Styles.collapsible]: collapsible,
				[Styles.collapsed]: collapsed,
			})}>
			<BoxTitle className={Styles.question} onClick={onClick}>
				<div className={Styles.questionText}>{t(questionKey)}</div>
				{collapsible && <Collapser />}
			</BoxTitle>
			<BoxBody className={Styles.answerContainer}>
				<div className={Styles.answer}>{t(answerKey)}</div>
			</BoxBody>
		</Box>
	);
}

function Collapser(): ReactElement {
	return (
		<div className={Styles.collapseIcon}>
			<Chevron />
		</div>
	);
}

export default FrequentlyAskedQuestion;
