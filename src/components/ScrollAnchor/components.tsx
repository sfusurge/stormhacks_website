import cx from "classnames";

import React, { useEffect, useMemo, useRef } from "react";
import { ComponentProps, PropsWithChildren, ReactElement } from "react";
import { Link, useHref, useLinkClickHandler, useMatch } from "react-router-dom";

import { getScrollObserver } from "./observer";
import { encodeAnchorId, scrollToAnchor } from "./util";

export type ScrollAnchorProps = PropsWithChildren<{
	id: string;

	onVisible?: (id: string) => void;
	onHidden?: (id: string) => void;
}>;

/**
 * A scroll anchor.
 *
 * This creates an element that can be scrolled to using the {@link scrollToAnchor} function.
 */
export function ScrollAnchor({ children, id, onVisible, onHidden }: ScrollAnchorProps): ReactElement {
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (!onVisible && !onHidden) return;

		const el = ref.current;
		if (el == null) return;

		const scrollObserver = getScrollObserver(el);
		if (scrollObserver == null) return;

		// Add the metadata for this anchor and start observing intersections.
		scrollObserver.anchors.set(el, {
			id,
			visible: false,
			events: {
				onVisible,
				onHidden,
			},
		});

		scrollObserver.observer.observe(el);
		return () => {
			scrollObserver.observer.unobserve(el);
			scrollObserver.anchors.delete(el);
		};
	}, [id, ref, onHidden, onVisible]);

	return (
		<div id={encodeAnchorId(id)} ref={ref}>
			{children}
		</div>
	);
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

	/**
	 * The link title.
	 */
	title?: string;

	onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}>;

/**
 * A link that causes the page to scroll to a {@link ScrollAnchor}.
 */
export function ScrollAnchorLink({ id, href, title, onClick, children, ...rest }: ScrollAnchorLinkProps) {
	const aHref = useMemo(() => href ?? `#${encodeAnchorId(id)}`, [id, href]);
	return (
		<a
			{...rest}
			href={aHref}
			title={title}
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
