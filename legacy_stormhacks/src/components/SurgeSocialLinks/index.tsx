import { SocialLink, SocialLinkType } from "~/SocialLink";

/**
 * SFU Surge social media links.
 */
function SurgeSocialLinks({
	className,
}: {
	/**
	 * Classes to add to each link in the fragment.
	 */
	className?: string;
}) {
	const links = getSurgeSocialLinks();

	return (
		<>
			{links.map(({ href, type }) => (
				<SocialLink key={href} type={type} href={href} identity="SFU Surge" className={className} />
			))}
		</>
	);
}

export interface SurgeSocialLinkInfo {
	type: SocialLinkType;
	href: string;
}

export function getSurgeSocialLinks(): SurgeSocialLinkInfo[] {
	// TODO: Links to social media.

	return [
		{ type: SocialLinkType.LinkedIn, href: "https://www.linkedin.com/company/sfu-surge/" },
		{ type: SocialLinkType.Facebook, href: "https://www.facebook.com/sfusurge" },
		{ type: SocialLinkType.Instagram, href: "https://www.instagram.com/sfusurge/" },
		{ type: SocialLinkType.GitHub, href: "https://github.com/sfusurge" },
		{ type: SocialLinkType.Email, href: "mailto:info@stormhacks.com" },
	];
}

export default SurgeSocialLinks;
