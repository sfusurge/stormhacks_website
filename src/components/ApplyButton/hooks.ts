import { HackathonInfo } from "$constants/about";

import { useCallback, useEffect, useState } from "react";

type FormState = "pre-open" | "opened" | "closed";

interface Timespan {
	opens: Date | null;
	closes: Date | null;
}
class TimespanUpdater {
	private interval: ReturnType<typeof setInterval> | null;
	private listeners: Set<() => void>;
	private timespan: Timespan;

	public constructor(ts: Timespan) {
		this.timespan = ts;
		this.listeners = new Set();
		this.interval = null;
	}

	public add(listener: () => void) {
		if (this.interval == null) {
			this.interval = setInterval(() => {
				this.listeners.forEach((fn) => fn());
			}, 950);
		}

		this.listeners.add(listener);
	}

	public remove(listener: () => void) {
		this.listeners.delete(listener);

		if (this.listeners.size < 1 && this.interval != null) {
			clearInterval(this.interval);
			this.interval = null;
		}
	}
}

const updaters = {
	hacker: new TimespanUpdater(HackathonInfo.register.timespan.hacker),
	mentor: new TimespanUpdater(HackathonInfo.register.timespan.mentor),
};

export function useApplicationFormsTimespan(of: "hacker" | "mentor"): {
	state: FormState;
	timeRemaining: number | undefined;
	timeRemainingString: string;
} {
	// Register updater.
	const [_, setCounter] = useState(0);
	const incrementCounter = useCallback(() => {
		setCounter((n) => n + 1);
	}, [setCounter]);

	useEffect(() => {
		updaters[of].add(incrementCounter);
		return () => updaters[of].remove(incrementCounter);
	}, [incrementCounter, of]);

	// Calculate timespan info and return it.
	const { opens, closes } = HackathonInfo.register.timespan[of];
	const now = Date.now();

	if (opens == null) {
		return {
			state: "pre-open",
			timeRemaining: undefined,
			timeRemainingString: "soon",
		};
	}

	// Before open.
	const millisToOpen = opens.getTime() - now;
	if (millisToOpen > 0) {
		return {
			state: "pre-open",
			timeRemaining: millisToOpen,
			timeRemainingString: formatTimeString(opens, millisToOpen),
		};
	}

	// After close.
	let millisToClose = undefined;
	let millisToCloseString = "";
	if (closes != null) {
		millisToClose = closes.getTime() - now;
		millisToCloseString = formatTimeString(closes, millisToClose);
		if (millisToClose > 0) {
			return {
				state: "closed",
				timeRemaining: millisToClose,
				timeRemainingString: formatTimeString(closes, millisToClose),
			};
		}
	}

	// Opened.
	return {
		state: "opened",
		timeRemaining: millisToClose,
		timeRemainingString: millisToCloseString,
	};
}

function formatTimeString(date: Date, millisUntil: number): string {
	function padded(n: number): string {
		return n.toString(10).padStart(2, "0");
	}

	const days = Math.floor(millisUntil / 1000 / 60 / 60 / 24);
	const hours = Math.floor((millisUntil / 1000 / 60 / 60) % 24);
	const minutes = Math.floor((millisUntil / 1000 / 60) % 60);
	const seconds = Math.floor((millisUntil / 1000) % 60);

	console.log(days, hours, minutes, seconds);

	if (days > 0) {
		return `${days}:${padded(hours)}:${padded(minutes)}`;
	}

	if (hours > 0) {
		return `${hours}:${padded(minutes)}`;
	}

	return `${minutes}:${padded(seconds)}`;
}
