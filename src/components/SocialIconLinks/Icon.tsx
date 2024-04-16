import { SocialLinkType, SocialLinkTypeInfo } from "./Types";
import Image from "next/image";
import Link from "next/link";

export interface SocialLinkIconProps {
	type: SocialLinkType;
}

const SocialLinkIcon: React.FC<SocialLinkIconProps> = ({ type }) => {
	const alt = SocialLinkTypeInfo[type].name;
	const href = SocialLinkTypeInfo[type].href;
	const icon = SocialLinkTypeInfo[type].icon
	
	return (
		<Link href={href}>
			<Image 
			src={icon}
			alt={alt}
			width={21.12}
			height={20}
			/>
		</Link>
	);
}

export default SocialLinkIcon;