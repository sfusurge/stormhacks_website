const TIME_SECONDS = 1000;
const TIME_MINUTES = TIME_SECONDS * 60;
const TIME_HOURS = TIME_MINUTES * 60;
const TIME_DAYS = TIME_HOURS * 24;

export interface TimeSpanInfoFormattingArguments {
	days: string;
	daysPrefixed: string;
	hours: string;
	hoursPrefixed: string;
	minutes: string;
	minutesPrefixed: string;
	seconds: string;
	secondsPrefixed: string;
}

/**
 * Information about a span of time.
 */
export class TimeSpanInfo {
	public readonly from: Date;
	public readonly to: Date;

	public constructor(from: Date, to: Date) {
		this.from = from;
		this.to = to;

		if (from.getTime() > to.getTime()) {
			throw new Error("Provided time span is invalid. End cannot occur before start.");
		}
	}

	/**
	 * The total number of milliseconds over the time span.
	 */
	public get milliseconds(): number {
		return this.to.getTime() - this.from.getTime();
	}

	/**
	 * The total number of seconds over the time span, rounded down.
	 */
	public get seconds(): number {
		return Math.floor(this.milliseconds / TIME_SECONDS);
	}

	/**
	 * The total number of minutes over the time span, rounded down.
	 */
	public get minutes(): number {
		return Math.floor(this.milliseconds / TIME_MINUTES);
	}

	/**
	 * The total number of hours over the time span, rounded down.
	 */
	public get hours(): number {
		return Math.floor(this.milliseconds / TIME_HOURS);
	}

	/**
	 * The total number of days over the time span, rounded down.
	 */
	public get days(): number {
		return Math.floor(this.milliseconds / TIME_DAYS);
	}

	public toFormattingArguments(): TimeSpanInfoFormattingArguments {
		const { days, hours, minutes, seconds } = this;
		const strDays = days.toString(10);
		const strHours = (hours % 24).toString(10);
		const strMinutes = (minutes % 60).toString(10);
		const strSeconds = (seconds % 60).toString(10);

		return {
			days: strDays,
			hours: strHours,
			minutes: strMinutes,
			seconds: strSeconds,
			daysPrefixed: strDays.padStart(2, "0"),
			hoursPrefixed: strHours.padStart(2, "0"),
			minutesPrefixed: strMinutes.padStart(2, "0"),
			secondsPrefixed: strSeconds.padStart(2, "0"),
		};
	}
}
