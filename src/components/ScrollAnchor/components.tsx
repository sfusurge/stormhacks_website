import cx from "classnames";

import React, { useMemo } from "react";
import { ComponentProps, PropsWithChildren, ReactElement } from "react";
import { Link, useHref, useLinkClickHandler, useMatch } from "react-router-dom";

import { encodeAnchorId, scrollToAnchor } from "./util";

export type ScrollAnchorProps = PropsWithChildren<{
	id: string;
}>;

/**
 * A scroll anchor.
 *
 * This creates an element that can be scrolled to using the {@link scrollToAnchor} function.
 */
export function ScrollAnchor({ children, id }: ScrollAnchorProps): ReactElement {
	return <div id={encodeAnchorId(id)}>{children}</div>;
}

type ScrollAnchorLinkProps = PropsWithChildren<{
	/**
	 * The anchor ID.
	 */
	id: string;

	/**
	 * The `<a>` href value.
	 * This will do absolutely nothing.
	 */
	href?: string;

	/**
	 * The class name.
	 */
	className?: string;

	onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}>;

/**
 * A link that causes the page to scroll to a {@link ScrollAnchor}.
 */
export function ScrollAnchorLink({ id, href, onClick, children, ...rest }: ScrollAnchorLinkProps) {
	const aHref = useMemo(() => href ?? `#${encodeAnchorId(id)}`, [id, href]);
	return (
		<a
			{...rest}
			href={aHref}
			onClick={(event) => {
				onClick?.(event);
				if (!event.defaultPrevented) {
					scrollToAnchor(id);
				}

				event.preventDefault();
			}}>
			{children}
		</a>
	);
}

type ScrollAnchorNavLinkProps = PropsWithChildren<
	(
		| {
				id: string;
				path: string;
		  }
		| {
				id?: undefined;
				path: string;
		  }
	) & {
		activeClassName?: string;
		onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
	} & Pick<ScrollAnchorLinkProps, Exclude<keyof ScrollAnchorLinkProps, "href" | "onClick" | "id">> &
		Pick<ComponentProps<typeof Link>, "replace" | "state" | "target">
>;

/**
 * A navigation link that changes the page using `react-router-dom` and then scrolls to an anchor
 * on the page.
 */
export const ScrollAnchorNavLink = React.forwardRef(
	({ id, path, activeClassName, replace, state, target, children, className, onClick }: ScrollAnchorNavLinkProps) => {
		const isCurrent = useMatch(path);
		const href = useHref(path);
		const handleClick = useLinkClickHandler(path, {
			replace,
			state,
			target,
		});

		return (
			<ScrollAnchorLink
				id={id ?? path}
				href={href}
				className={cx([className, isCurrent ? activeClassName : undefined])}
				onClick={(event) => {
					onClick?.(event);
					if (!event.defaultPrevented) {
						handleClick(event);
						event.defaultPrevented = false; // Allow the ScrollAnchorLink to work.
					}
				}}>
				{children}
			</ScrollAnchorLink>
		);
	}
);
