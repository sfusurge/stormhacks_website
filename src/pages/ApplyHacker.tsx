import { useTranslation } from "react-i18next";

import Box, { BoxStyle, BoxTitle } from "~/Box";
import { BoxBody } from "~/Box/components";
import ExternalRedirect from "~/ExternalRedirect";
import Page from "~/Page";

import { HackathonInfo } from "../about";

/**
 * A page for applying to StormHacks 2023 as a hacker.
 */
function ApplyHackerPage() {
	const { t } = useTranslation();
	const type = t("apply.type.hacker");

	return (
		<Page className="width-limited">
			<Box style={BoxStyle.Knockout}>
				<BoxTitle>{t("apply.title", { type })}</BoxTitle>
				<BoxBody>
					<p>{t("apply.text.0", { type })}</p>
					<p>{t("apply.text.1", { type })}</p>
				</BoxBody>
			</Box>
			<ExternalRedirect href={HackathonInfo.register.hacker} replace />
		</Page>
	);
}

export default ApplyHackerPage;
