import { SocialLink, SocialLinkType } from "~/SocialLink";

/**
 * SFU Surge social media links.
 */
function SurgeSocialLinks() {
	const links = getSurgeSocialLinks();

	return (
		<div className="surge-social-links">
			{links.map(({ href, type }) => (
				<SocialLink key={href} type={type} href={href} identity="SFU Surge" />
			))}
		</div>
	);
}

export interface SurgeSocialLinkInfo {
	type: SocialLinkType;
	href: string;
}

export function getSurgeSocialLinks(): SurgeSocialLinkInfo[] {
	// TODO: Links to social media.

	return [
		// TODO: LinkedIn
		// TODO: Facebook
		// TODO: Instagram
		// TODO: GitHub
		// TODO: Email (with correct email address)
		{ type: SocialLinkType.Email, href: "mailto:sfusurge@gmail.com" },
	];
}

export default SurgeSocialLinks;
