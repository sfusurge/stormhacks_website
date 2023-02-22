import { InlineSVG } from "~/SVG";

import { ReactComponent as EmailIcon } from "$asset/icon/email.svg";

/**
 * An enum of supported social link types.
 */
export enum SocialLinkType {
	// TODO: LinkedIn,
	// TODO: Facebook,
	// TODO: Instagram,
	// TODO: GitHub,
	Email,
}

type SVG = Parameters<typeof InlineSVG>[0]["svg"];

/**
 * A lookup table for getting the icon and translation keys for a given {@link SocialLinkType}.
 */
export const SocialLinkTypeInfo: Record<SocialLinkType, { icon: SVG; i18n: string }> = {
	[SocialLinkType.Email]: { icon: EmailIcon, i18n: "social-link.email" },
};
