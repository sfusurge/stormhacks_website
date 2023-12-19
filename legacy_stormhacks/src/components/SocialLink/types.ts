import { InlineSVG } from "~/SVG";

import { ReactComponent as EmailIcon } from "$asset/icon/email.svg";
import { ReactComponent as FacebookIcon } from "$asset/icon/facebook.svg";
import { ReactComponent as GithubIcon } from "$asset/icon/github.svg";
import { ReactComponent as InstagramIcon } from "$asset/icon/instagram.svg";
import { ReactComponent as LinkedinIcon } from "$asset/icon/linkedin.svg";

/**
 * An enum of supported social link types.
 */
export enum SocialLinkType {
	LinkedIn,
	Facebook,
	Instagram,
	GitHub,
	Email,
}

type SVG = Parameters<typeof InlineSVG>[0]["svg"];

/**
 * A lookup table for getting the icon and translation keys for a given {@link SocialLinkType}.
 */
export const SocialLinkTypeInfo: Record<SocialLinkType, { icon: SVG; i18n: string }> = {
	[SocialLinkType.Email]: { icon: EmailIcon, i18n: "social-link.email" },
	[SocialLinkType.GitHub]: { icon: GithubIcon, i18n: "social-link.github" },
	[SocialLinkType.Facebook]: { icon: FacebookIcon, i18n: "social-link.facebook" },
	[SocialLinkType.Instagram]: { icon: InstagramIcon, i18n: "social-link.instagram" },
	[SocialLinkType.LinkedIn]: { icon: LinkedinIcon, i18n: "social-link.linkedin" },
};
