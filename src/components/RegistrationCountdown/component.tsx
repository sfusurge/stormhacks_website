import cx from "classnames";

import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import Styles from "./RegistrationCountdown.module.scss";

interface RegistrationCountdownProps {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;

	className?: string;
}

export function RegistrationCountdown({
	className,
	days,
	hours,
	minutes,
	seconds,
}: RegistrationCountdownProps): ReactElement {
	return (
		<div className={cx(Styles.outerBox, Styles.component, className)}>
			<div className={Styles.innerBox}>
				<div className={Styles.columns}>
					{days > 0 && <CountdownColumn value={days} i18nKey="timespan.units.days" />}
					<CountdownColumn value={hours} i18nKey="timespan.units.hours" />
					<CountdownColumn value={minutes} i18nKey="timespan.units.minutes" />
					{days < 1 && <CountdownColumn value={seconds} i18nKey="timespan.units.seconds" />}
				</div>
			</div>
		</div>
	);
}

function CountdownColumn({ value, i18nKey }: { value: number; i18nKey: string }): ReactElement {
	const { t } = useTranslation();
	const unit = t(i18nKey, { count: value });
	return (
		<div className={Styles.tickerColumn}>
			<div className={cx(Styles.unit, Styles.upsideDown)}>{unit}</div>
			<div className={Styles.value}>{value.toString(10).padStart(2, "0")}</div>
			<div className={Styles.unit}>{unit}</div>
		</div>
	);
}
