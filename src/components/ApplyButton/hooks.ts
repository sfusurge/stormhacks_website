import { HackathonInfo } from "$constants/about";

type FormState = "pre-open" | "opened" | "closed";

export function useApplicationFormsTimespan(of: "hacker" | "mentor"): {
	state: FormState;
	timeRemaining: number | undefined;
	timeRemainingString: string;
} {
	// TODO: Use useEffect+useState to refresh the component automatically.

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
	if (millisToOpen < 0) {
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
		if (millisToClose < 0) {
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
	return millisUntil.toString(); // TODO
}
