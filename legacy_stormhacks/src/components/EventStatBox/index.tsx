import cx from "classnames";

import { ComponentProps, PropsWithChildren, ReactElement } from "react";
import { useTranslation } from "react-i18next";

import Box, { BoxBody, BoxLabel, BoxLabelPosition, BoxStyle } from "~/Box";
import EventStat, { EventStat_UNLOCALIZED as EVENTSTAT_UNLOCALIZED } from "~/EventStat";

import Styles from "./EventStatBox.module.scss";

type BaseEventStatBoxProps = PropsWithChildren<{
	/**
	 * The style of box to use.
	 */
	style?: BoxStyle;

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
	"label-position": labelPosition,
	...props
}: BaseEventStatBoxProps &
	(
		| {
				"label-i18n-key": string;
				"label-i18n-props"?: Record<string, unknown>;
				"label-position": BoxLabelPosition;
				"label-className"?: string;
		  }
		| {
				"label-i18n-key"?: undefined;
				"label-i18n-props"?: undefined;
				"label-position"?: undefined;
				"label-className"?: undefined;
		  }
	)) {
	const { t } = useTranslation();
	return EventStatBox_UNLOCALIZED({
		...props,
		label: labelI18nKey == null ? undefined : t(labelI18nKey, labelI18nProps),
		"label-position": labelPosition,
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
	"label-position": labelPosition,
	"label-className": labelClassName,
}: BaseEventStatBoxProps & {
	label?: string | ReactElement;
	"label-position"?: BoxLabelPosition;
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
		<Box style={style} className={cx(Styles.component, className)}>
			{label != null && (
				<BoxLabel
					position={labelPosition ?? BoxLabelPosition.TopCenter}
					className={cx(Styles.label, labelClassName)}>
					{label}
				</BoxLabel>
			)}
			<BoxBody>
				{statsEls}
				{children && <div className={Styles.extra}>{children}</div>}
			</BoxBody>
		</Box>
	);
}
