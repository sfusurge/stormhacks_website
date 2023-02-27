import { AnchorHTMLAttributes, MouseEventHandler, PropsWithChildren, PropsWithRef, ReactElement, Ref } from "react";
import { useTranslation } from "react-i18next";
import { Link, useInRouterContext } from "react-router-dom";

import { ButtonStyle, applyClassName } from "~/Button";

export { ButtonStyle } from "~/Button";

type BaseButtonLinkProps = PropsWithRef<
	PropsWithChildren<
		{
			/**
			 * The {@link ButtonStyle button style} to use.
			 */
			style?: ButtonStyle;

			/**
			 * Additional class names to apply to the element.
			 */
			className?: string;

			/**
			 * The destination of the link.
			 */
			href: string;

			/**
			 * Click handler.
			 */
			onClick?: MouseEventHandler;

			ref?: Ref<HTMLAnchorElement>;
		} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "title">
	>
>;

/**
 * A link that looks like a button.
 *
 * This uses translation keys instead of raw text values.
 */
export function ButtonLink(
	props: BaseButtonLinkProps & {
		"i18n-title": string;
	}
): ReactElement {
	const { t } = useTranslation();
	const title = t(props["i18n-title"]);

	// Forward the actual rendering to the unlocalized button link.
	return ButtonLink_UNLOCALIZED({ ...props, title, "i18n-title": undefined });
}

/**
 * A link that looks like a button.
 */
export function ButtonLink_UNLOCALIZED({
	style,
	className,
	href,
	children,
	...props
}: BaseButtonLinkProps & {
	title: string;

	"i18n-title"?: undefined;
}): ReactElement {
	const withinRouter = useInRouterContext();
	const isLocalLink = /^[.]+:/i.test(href) && !href.startsWith("//");
	const linkProps = {
		className: applyClassName(className, style),
	};

	// If the href is "#", it's reasonable to assume we disabled the link on purpose.
	if (href === "#") {
		return (
			<span {...props} {...linkProps}>
				{children}
			</span>
		);
	}

	if (withinRouter && isLocalLink) {
		// If within `react-router-dom`, use the `<Link>` component.
		return (
			<Link {...props} {...linkProps} to={href}>
				{children}
			</Link>
		);
	} else {
		// Otherwise, use an anchor element.
		return (
			<a {...props} {...linkProps} href={href}>
				{children}
			</a>
		);
	}
}

export default ButtonLink;
