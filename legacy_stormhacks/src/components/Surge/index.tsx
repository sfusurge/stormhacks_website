import { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";

import { InlineSVG } from "~/SVG";

import { ReactComponent as SurgeIcon } from "$asset/surge-icon.svg";

/**
 * A reference to SFU surge.
 *
 * This may have an icon or link.
 */
export function Surge({
	children,
	hasLink,
	hasIcon,
}: PropsWithChildren<{
	/**
	 * Should it have a link?
	 */
	hasLink?: boolean;

	/**
	 * Should it have an icon?
	 */
	hasIcon?: boolean;
}>) {
	const { t } = useTranslation();
	const text = children || t("brand.surge");

	const body = (
		<>
			{text} {hasIcon && <InlineSVG svg={SurgeIcon} />}
		</>
	);

	return hasLink ? <a href="https://sfusurge.com">{body}</a> : body;
}
