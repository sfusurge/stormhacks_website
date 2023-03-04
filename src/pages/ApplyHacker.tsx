import { HackathonInfo, isHackerApplicationOpen } from "$constants/about";

import { useTranslation } from "react-i18next";

import Box, { BoxStyle, BoxTitle } from "~/Box";
import { BoxBody } from "~/Box/components";
import ExternalRedirect from "~/ExternalRedirect";
import Page from "~/Page";

/**
 * A page for applying to StormHacks 2023 as a hacker.
 */
function ApplyHackerPage() {
	const { t } = useTranslation();
	const [open] = isHackerApplicationOpen();
	const type = t("apply.type.hacker");

	return (
		<Page className="width-limited">
			<Box style={BoxStyle.Knockout}>
				<BoxTitle>{t("apply.title", { type })}</BoxTitle>
				<BoxBody>
					<p>{t(`apply.text.${open}.0`, { type })}</p>
					<p>{t(`apply.text.${open}.1`, { type })}</p>
				</BoxBody>
			</Box>
			{open === "opened" && <ExternalRedirect href={HackathonInfo.register.hacker.link} replace />}
		</Page>
	);
}

export default ApplyHackerPage;
