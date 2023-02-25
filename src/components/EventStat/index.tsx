import cx from "classnames";

import { FunctionComponent, PropsWithChildren, SVGProps } from "react";
import { useTranslation } from "react-i18next";

import InlineSVG from "~/SVG";

import Styles from "./EventStat.module.scss";

interface BaseEventStatProps {
	/**
	 * The icon of the stat.
	 */
	icon: FunctionComponent<SVGProps<SVGSVGElement>>;

	className?: string;
}

/**
 * A statistic about the event.
 */
export default function EventStat({
	"i18n-key": i18nKey,
	"i18n-props": i18nProps,
	...props
}: BaseEventStatProps & {
	/**
	 * The i18n key.
	 */
	"i18n-key": string;

	/**
	 * The i18n interpolation values.
	 */
	"i18n-props"?: Record<string, unknown>;
}) {
	const { t } = useTranslation();
	return EventStat_UNLOCALIZED({ ...props, children: t(i18nKey, i18nProps) });
}

/**
 * A statistic about the event.
 *
 * This uses translation keys instead of raw text values.
 */
export function EventStat_UNLOCALIZED({ icon, className, children }: PropsWithChildren<BaseEventStatProps>) {
	return (
		<div className={cx(Styles.stat, className)}>
			{<InlineSVG svg={icon} className={cx(Styles.icon)} />}
			{children}
		</div>
	);
}
