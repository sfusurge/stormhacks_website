import { ReactElement } from "react";
import { TFunction, useTranslation } from "react-i18next";

import { useTimeSpan, useUpdatingTimeSpan } from "./hooks";
import { TimeSpanInfo } from "./timespan";

/**
 * A self-refreshing span of time.
 */
export function TimeSpan({ from, to }: { from: Date | (() => Date); to: Date }): ReactElement {
	const { t } = useTranslation();
	const ts = useUpdatingTimeSpan(from, to);
	if (ts == null) return <span />;

	return renderTimeSpan(t, ts);
}

/**
 * A span of time.
 */
export function FixedTimeSpan({ from, to }: { from: Date | (() => Date); to: Date }): ReactElement {
	const { t } = useTranslation();
	const ts = useTimeSpan(from instanceof Date ? from : from(), to);
	if (ts == null) return <span />;

	return renderTimeSpan(t, ts);
}

function renderTimeSpan(t: TFunction, ts: TimeSpanInfo): ReactElement {
	return <span>{formatTimeSpan(t, ts)}</span>;
}

/**
 * Formats a time span into a string, similarly to how the TimeSpan component would render it.
 * @param t The translation function.
 * @param ts The time span.
 * @returns The formatted time span string.
 */
export function formatTimeSpan(t: TFunction, ts: TimeSpanInfo | null): string {
	if (ts == null) return "(no time span)";

	const args = ts.toFormattingArguments();
	const tVariant =
		ts.days > 0 ? `with-days` : ts.hours > 0 ? `with-hours` : ts.minutes > 0 ? `with-minutes` : `with-seconds`;

	return t(`timespan.numbers.${tVariant}`, args);
}
