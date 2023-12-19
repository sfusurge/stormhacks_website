import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import InlineSVG from "~/SVG";
import { ScrollAnchorNavLink } from "~/ScrollAnchor/components";

import { ReactComponent as StormhacksIcon } from "$asset/icon/stormhacks.svg";

import { AppRoute } from "../../app/Routes";
import Styles from "./Header.module.scss";

/**
 * A link to a section in a page.
 * If the link is the current section, it will have an extra class applied to it.
 */
function LinkToSection({ path, routeId }: { path: string; routeId: string }) {
	const { t } = useTranslation();
	return (
		<ScrollAnchorNavLink
			id={routeId}
			path={path}
			activeClassName={Styles.currentSection}
			title={t(`header.links.${routeId}.title`)}>
			{t(`header.links.${routeId}.text`)}
		</ScrollAnchorNavLink>
	);
}

/**
 * A link to an external website.
 */
function LinkToExternal({ path, routeId }: { path: string; routeId: string }) {
	const { t } = useTranslation();
	return (
		<a id={routeId} href={path} title={t(`header.links.${routeId}.title`)}>
			{t(`header.links.${routeId}.text`)}
		</a>
	);
}

/**
 * A link to the start of the main page.
 */
function LinkToMain({ routeId }: { routeId: string }) {
	const { t } = useTranslation();
	return (
		<nav className={Styles.headerStickyLeft}>
			<ScrollAnchorNavLink
				path={"/"}
				id={routeId}
				className={Styles.logoLink}
				title={t(`header.links.${routeId}.title`)}>
				<InlineSVG svg={StormhacksIcon} />
			</ScrollAnchorNavLink>
		</nav>
	);
}

/**
 * Website navigation links.
 * These are derived from the application routes.
 */
function HeaderNav({ appRoutes }: { appRoutes: AppRoute[] }) {
	type LinkDeclaration = {
		href: string;
		id: string;
		hidden: boolean;
		component: (props: { path: string; routeId: string }) => ReactElement;
	};

	const links: Array<LinkDeclaration> = appRoutes.flatMap((route) => {
		if (route.type === "paged") {
			return route.pages.flatMap(({ path, id, hiddenOnNav }) => ({
				href: path,
				id,
				hidden: hiddenOnNav ?? false,
				component: LinkToSection,
			}));
		}

		if (route.type === "single") {
			return [{ href: route.path, id: route.id, hidden: route.hiddenOnNav ?? false, component: LinkToSection }];
		}

		return [{ href: route.href, id: route.id, hidden: route.hiddenOnNav ?? false, component: LinkToExternal }];
	});

	const mainRouteId = links.find(({ href }) => href === "/")!.id;
	return (
		<>
			<LinkToMain routeId={mainRouteId} />
			<nav className={Styles.linkContainer}>
				{links
					.filter(({ href, hidden }) => href !== "/" && !hidden)
					.map(({ href, id, component: Link }) => (
						<Link key={href} path={href} routeId={id} />
					))}
			</nav>
		</>
	);
}

export default HeaderNav;
