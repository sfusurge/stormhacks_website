import InlineSVG from "~/SVG";

import { SocialLinkType, SocialLinkTypeInfo } from "./types";

/**
 * An icon for a social link.
 */
function SocialLinkIcon({
	type,
}: {
	/**
	 * The type of social link.
	 * This will determine which icon is used.
	 */
	type: SocialLinkType;
}) {
	const { icon } = SocialLinkTypeInfo[type];
	return <InlineSVG svg={icon} />;
}

export default SocialLinkIcon;
