import { ReactElement } from "react";

import AboutStormhacksPage from "$page/AboutStormhacks";
import AboutSurgePage from "$page/AboutSurge";
import FAQPage from "$page/FAQ";
import SponsorsPage from "$page/Sponsors";

export type AppRoute =
	| {
			type: "paged";
			pages: Array<{
				id: string;
				path: string;
				page: () => ReactElement;
			}>;
	  }
	| {
			type: "single";
			id: string;
			path: string;
			page: () => ReactElement;
	  }
	| {
			type: "external";
			id: string;
			href: string;
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
		type: "external",
		id: "temp",
		href: "about:blank",
	},
];

export default Routes;
