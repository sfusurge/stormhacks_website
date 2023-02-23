import { FunctionComponent, useMemo } from "react";
import { Route, useNavigate } from "react-router-dom";
import { Routes as Pages } from "react-router-dom";

import Pager from "~/Pager";

import AboutStormhacksPage from "$page/AboutStormhacks";
import AboutSurgePage from "$page/AboutSurge";
import FAQPage from "$page/FAQ";
import SponsorsPage from "$page/Sponsors";

/**
 * Single-page application routes.
 */
function Routes() {
	const pages = useMemo(
		// We use a memo so it doesn't keep re-rendering the pages whenever `<Pager>` is rendered.
		() => [
			{ path: "/", page: () => <AboutStormhacksPage /> },
			{ path: "/sponsors", page: () => <SponsorsPage /> },
			{ path: "/faq", page: () => <FAQPage /> },
			{ path: "/about-us", page: () => <AboutSurgePage /> },
		],
		[]
	);

	const navigate = useNavigate();
	const single = (
		<Pager
			pages={pages}
			onPageChange={(path) => {
				console.debug("Scrolled into page", path);
				navigate(path, { replace: true });
			}}
		/>
	);

	return (
		<Pages>
			<Route index element={single} />
			<Route path="/sponsors" element={single} />
			<Route path="/faq" element={single} />
			<Route path="/about-us" element={single} />
		</Pages>
	);
}

// if (currentSection != null && matches.) {
// 	// navigate(currentSection, { replace: true });
// }
export function RouteLinks({ Link }: { Link: FunctionComponent<{ path: string; tKey: string }> }) {
	return (
		<>
			<Link path={"/sponsors"} tKey="header.link.sponsors" />
			<Link path={"/faq"} tKey="header.link.faq" />
			<Link path={"/about-us"} tKey="header.link.about-us" />
			<a href="about:blank">A Long Link</a>
			<a href="about:blank">Even More Links</a>
		</>
	);
}

export default Routes;
