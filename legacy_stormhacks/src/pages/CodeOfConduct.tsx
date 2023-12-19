import { HackathonInfo } from "$constants/about";

import { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";

import Box, { BoxStyle } from "~/Box";
import Page from "~/Page";
import { scrollToElement } from "~/ScrollAnchor/util";

/**
 * A page for applying to StormHacks 2023 as a hacker.
 */
function CodeOfConductPage() {
	const { t } = useTranslation();
	const paragraphs: string[] = t("code-of-conduct.paragraphs", { returnObjects: true });

	function IncidentsEmail(_props: {}) {
		return <a href={`mailto:${HackathonInfo.incidentsEmail}`}>{HackathonInfo.incidentsEmail}</a>;
	}

	useEffect(() => {
		// Scroll to the top of the page.
		scrollToElement(document.body, {
			animationSpeedModifier(ms, _scrollDelta, _scrollEl) {
				return ms * 0.15;
			},
		});
	}, []);

	const components = {
		p: <p>Paragraph</p>,
		pbox: <Box style={BoxStyle.Knockout}></Box>,
		b: <strong>Bold</strong>,
		i: <em>Italic</em>,
		h2: <h2>Heading Level 2</h2>,
		h3: <h3>Heading Level 3</h3>,

		// Special.
		IncidentsEmail: <IncidentsEmail />,
		MLHCodeOfConduct: <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">CoC</a>,
	};

	return (
		<Page className="width-limited">
			<h1>{t("code-of-conduct.title")}</h1>
			{paragraphs.map((v, i) => (
				<Trans key={i} components={components}>
					{v}
				</Trans>
			))}
			<hr />
			<div role="doc-subtitle">
				<Trans i18nKey={"code-of-conduct.note"} components={components}></Trans>
			</div>
		</Page>
	);
}

export default CodeOfConductPage;
