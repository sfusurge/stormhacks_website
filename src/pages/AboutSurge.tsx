import { SurgeInfo } from "$constants/about";
import cx from "classnames";

import { ComponentProps, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import ExecPhoto from "~/ExecPhoto";
import Page from "~/Page";

import { ReactComponent as HeartGraphic } from "$asset/giant-heart.svg";
import { ReactComponent as OtterLeft } from "$asset/otter-left.svg";
import { ReactComponent as OtterRight } from "$asset/otter-right.svg";

import Styles from "./AboutSurge.module.scss";

const SurgeExecs = SurgeInfo.execs;

/**
 * The "About Surge" page.
 *
 * This contains some info about SFU Surge and pictures of our current exec team.
 */
function AboutSurgePage() {
	return (
		<Page className={cx("width-limited", Styles.page)}>
			<AboutSurgeSection />
		</Page>
	);
}

export function AboutSurgeSection() {
	return (
		<article className={Styles.container}>
			<SectionAbout />
			<SectionExecs />
		</article>
	);
}

function SectionAbout() {
	const { t } = useTranslation();
	return (
		<div className={cx(Styles.section, Styles.about)}>
			<OtterLeft className={Styles.otterLeft} />
			<OtterRight className={Styles.otterRight} />
			<div className={Styles.graphic}>
				<HeartGraphic />
				<HeartGraphic className={Styles.blurred} />
			</div>
			<div className={Styles.description}>
				<h1>{t("about-surge.title")}</h1>
				<p>{t("about-surge.paragraph.0")}</p>
				<p>{t("about-surge.paragraph.1")}</p>
			</div>
		</div>
	);
}

function SectionExecs() {
	type ClickHandler = Exclude<ComponentProps<typeof ExecPhoto>["onClick"], undefined>;
	const [currentExec, setCurrentExec] = useState<undefined | Parameters<ClickHandler>[0]>(undefined);
	const onClick = useCallback<ClickHandler>((exec) => setCurrentExec(exec), [setCurrentExec]);

	return (
		<div className={cx(Styles.section, Styles.execs)} onMouseLeave={() => setCurrentExec(undefined)}>
			<div className={Styles.execGridContainer}>
				<div className={Styles.execGrid}>
					{[
						SurgeExecs.map((exec) => (
							<ExecPhoto
								key={exec.name}
								{...exec}
								onClick={onClick}
								active={currentExec?.name === exec.name}
								className={cx({
									[Styles.exec]: true,
									[Styles.unselectedExec]: currentExec != null && currentExec.name !== exec.name,
								})}
							/>
						)),
					]}
				</div>
			</div>
			<div className={Styles.execInfo}>
				{currentExec && (
					<>
						<span className={Styles.execInfoDecoration}>{"{{"}&nbsp;</span>
						{(currentExec.link && <a href={currentExec.link}>{currentExec.name}</a>) || currentExec.name}
						<span className={Styles.execInfoDecoration}>&nbsp;{"}}"}</span>
					</>
				)}
			</div>
		</div>
	);
}

export default AboutSurgePage;
