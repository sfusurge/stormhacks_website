import cx from "classnames";

import { ComponentProps, PropsWithChildren, ReactElement } from "react";
import { useTranslation } from "react-i18next";

import EventStat, { EventStat_UNLOCALIZED as EVENTSTAT_UNLOCALIZED } from "~/EventStat";

import Styles from "./EventStatBox.module.scss";

/**
 * Available style of event statistic boxes.
 */
export const enum EventStatBoxStyle {
	/**
	 * A regular box with primary background color and inverted foreground color.
	 */
	Regular = "regular",

	/**
	 * An inverted box with inverted background color and primary foreground color.
	 */
	Inverted = "inverted",
}

/**
 * Available label locations.
 */
export const enum EventStatBoxLabel {
	TOP_RIGHT = "top-right",
}

type BaseEventStatBoxProps = PropsWithChildren<{
	/**
	 * The style of box to use.
	 */
	style?: EventStatBoxStyle;

	/**
	 * The stats to display in this box.
	 */
	stats: Array<ComponentProps<typeof EventStat> | ComponentProps<typeof EVENTSTAT_UNLOCALIZED>>;

	className?: string;
	statsClassName?: string;
}>;

/**
 * A box containing stats about the event.
 */
export default function EventStatBox({
	"label-i18n-key": labelI18nKey,
	"label-i18n-props": labelI18nProps,
	"label-location": labelLocation,
	...props
}: BaseEventStatBoxProps &
	(
		| {
				"label-i18n-key": string;
				"label-i18n-props"?: Record<string, unknown>;
				"label-location": EventStatBoxLabel;
				"label-className"?: string;
		  }
		| {
				"label-i18n-key"?: undefined;
				"label-i18n-props"?: undefined;
				"label-location"?: undefined;
				"label-className"?: undefined;
		  }
	)) {
	const { t } = useTranslation();
	return EventStatBox_UNLOCALIZED({
		...props,
		label: labelI18nKey == null ? undefined : t(labelI18nKey, labelI18nProps),
		"label-location": labelLocation,
	});
}

/**
 * A box containing stats about the event.
 */
export function EventStatBox_UNLOCALIZED({
	className,
	style,
	stats,
	statsClassName,
	children,
	label,
	"label-location": labelLocation,
	"label-className": labelClassName,
}: BaseEventStatBoxProps & {
	label?: string | ReactElement;
	"label-location"?: EventStatBoxLabel;
	"label-className"?: string;
}) {
	const statsEls = stats.map((stat, i) => {
		return "i18n-key" in stat ? (
			<EventStat key={i} {...stat} className={cx(stat.className, statsClassName)} />
		) : (
			<EVENTSTAT_UNLOCALIZED key={i} {...stat} className={cx(stat.className, statsClassName)}>
				{stat.children}
			</EVENTSTAT_UNLOCALIZED>
		);
	});

	return (
		<div
			className={cx(Styles.component, className, {
				[Styles.regular]: style == null || style === EventStatBoxStyle.Regular,
				[Styles.inverted]: style === EventStatBoxStyle.Inverted,
			})}>
			{label != null && (
				<div className={cx(Styles.label, labelClassName, Styles[labelLocation as any])}>{label}</div>
			)}
			{statsEls}
			{children && <div className={Styles.extra}>{children}</div>}
		</div>
	);
}
