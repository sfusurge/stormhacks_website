import { HackathonInfo, isMentorApplicationOpen } from "$constants/about";

import { useTranslation } from "react-i18next";

import Box, { BoxBody, BoxStyle, BoxTitle } from "~/Box";
import ExternalRedirect from "~/ExternalRedirect";
import Page from "~/Page";

/**
 * A page for applying to StormHacks 2023 as a mentor.
 */
function ApplyMentorPage() {
	const { t } = useTranslation();
	const [open] = isMentorApplicationOpen();
	const type = t("apply.type.mentor");

	return (
		<Page className="width-limited">
			<Box style={BoxStyle.Knockout}>
				<BoxTitle>{t("apply.title", { type })}</BoxTitle>
				<BoxBody>
					<p>{t(`apply.text.${open}.0`, { type })}</p>
					<p>{t(`apply.text.${open}.1`, { type })}</p>
				</BoxBody>
			</Box>
			{open === "opened" && <ExternalRedirect href={HackathonInfo.register.mentor.link} replace />}
		</Page>
	);
}

export default ApplyMentorPage;
