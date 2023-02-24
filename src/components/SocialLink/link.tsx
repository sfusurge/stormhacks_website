import { PropsWithChildren, ReactElement } from "react";
import { useTranslation } from "react-i18next";

import SocialLinkIcon from "./icon";
import { SocialLinkType, SocialLinkTypeInfo } from "./types";

/**
 * A link to social media.
 * @returns
 */
function SocialLink({
	href,
	identity,
	icon,
	type,
	children,
	className,
}: PropsWithChildren<{
	/**
	 * The identity of the link.
	 * This is used for the link title.
	 */
	identity: string;

	/**
	 * The destination of the link.
	 */
	href: string;

	/**
	 * The type of social link.
	 * This will determine which icon is used.
	 */
	type: SocialLinkType;

	/**
	 * Whether to show an icon, or if not a boolean, the icon to show.
	 * If unspecified, will default to `true`.
	 */
	icon?: boolean | ReactElement;

	/**
	 * Classes to add to the element.
	 */
	className?: string;
}>) {
	const { t } = useTranslation();
	const { i18n: ikey } = SocialLinkTypeInfo[type];

	const shouldHaveIcon = icon !== false;
	const shouldCreateIcon = icon == null || icon === true;

	const iconEl = shouldHaveIcon && (shouldCreateIcon ? <SocialLinkIcon type={type} /> : icon);

	return (
		<a href={href} title={t(`${ikey}.title`, { identity })} className={className}>
			{iconEl}
			{!children && !iconEl && t(`${ikey}.text`, { identity })}
			{children}
		</a>
	);
}

export default SocialLink;
