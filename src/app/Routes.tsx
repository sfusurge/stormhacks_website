import { ReactElement } from "react";

import AboutStormhacksPage from "$page/AboutStormhacks";
import AboutSurgePage from "$page/AboutSurge";
import ApplyHackerPage from "$page/ApplyHacker";
import ApplyMentorPage from "$page/ApplyMentor";
import FAQPage from "$page/FAQ";
import SponsorsPage from "$page/Sponsors";

export type AppRoute =
	| {
			type: "paged";
			pages: Array<{
				id: string;
				path: string;
				page: () => ReactElement;
				hiddenOnNav?: boolean;
			}>;
	  }
	| {
			type: "single";
			id: string;
			path: string;
			page: () => ReactElement;
			hiddenOnNav?: boolean;
	  }
	| {
			type: "external";
			id: string;
			href: string;
			hiddenOnNav?: boolean;
	  };

const Routes: AppRoute[] = [
	{
		type: "paged",
		pages: [
			{ path: "/", id: "about-stormhacks", page: () => <AboutStormhacksPage /> },
			{ path: "/sponsors", id: "sponsors", page: () => <SponsorsPage /> },
			{ path: "/faq", id: "faq", page: () => <FAQPage /> },
			{ path: "/about-us", id: "about-us", page: () => <AboutSurgePage /> },
		],
	},
	{
		type: "single",
		id: "apply-hacker",
		path: "/apply",
		page: () => <ApplyHackerPage />,
		hiddenOnNav: true,
	},
	{
		type: "single",
		id: "apply-mentor",
		path: "/apply-mentor",
		page: () => <ApplyMentorPage />,
		hiddenOnNav: true,
	},
	// {
	// 	type: "external",
	// 	id: "temp",
	// 	href: "about:blank",
	// },
];

export function getRouteIdFromPath(routes: AppRoute[], path: string): string | undefined {
	for (const route of routes) {
		if (route.type === "single" && route.path === path) return route.id;
		if (route.type === "paged") {
			for (const page of route.pages) {
				if (page.path === path) return page.id;
			}
		}
	}

	return undefined;
}

export default Routes;
