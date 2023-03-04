import { useCallback, useEffect, useState } from "react";

import { TimeSpanInfo } from "./timespan";

const GLOBAL_REFRESH_MS = 950;
let globalUpdateTicker: null | ReturnType<typeof setInterval> = null;
let globalUpdateListeners: Set<() => void> = new Set();

/**
 * Adds a listener function to be called periodically along with other listeners function.
 * This is used to refresh updating time spans.
 *
 * @param listener The listener.
 * @returns A function to remove the listener.
 */
function registerRefresh(listener: () => void): () => void {
	globalUpdateListeners.add(listener);
	if (globalUpdateTicker == null && globalUpdateListeners.size > 0) {
		globalUpdateTicker = setInterval(() => globalUpdateListeners.forEach((fn) => fn()), GLOBAL_REFRESH_MS);
	}

	return () => {
		globalUpdateListeners.delete(listener);
		if (globalUpdateTicker != null && globalUpdateListeners.size < 1) {
			clearInterval(globalUpdateTicker);
			globalUpdateTicker = null;
		}
	};
}

export const Now = Symbol("now");

/**
 * Gets the information for a span of time.
 *
 * @param from The start date.
 * @param to The end date. If this is null, null will be returned instead of a time span.
 *
 * @returns The time span info.
 */
export function useTimeSpan(from: Date, to: Date | null): TimeSpanInfo | null {
	if (to == null) return null;
	return new TimeSpanInfo(from, to);
}

/**
 * Gets the information for a span of time.
 * This will refresh the current component every second (in sync with other components that use time spans).
 *
 * @param from The start date.
 * @param to The end date. If this is null, null will be returned instead of a time span.
 *
 * @returns The time span info.
 */
export function useUpdatingTimeSpan(from: Date | (() => Date) | typeof Now, to: Date | null): TimeSpanInfo | null {
	const [_counter, setCounter] = useState(false);
	const refresh = useCallback(() => setCounter((counter) => !counter), [setCounter]);
	useEffect(() => (to == null ? undefined : registerRefresh(refresh)), [refresh, to]);

	const fromDate = from === Now ? new Date() : from instanceof Date ? from : from();
	return useTimeSpan(fromDate, to);
}
