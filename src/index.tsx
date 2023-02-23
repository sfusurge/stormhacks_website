import { ThemeProvider } from "@sfusurge/react-theme-utils";

import React, { ReactNode, useCallback, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import { useTranslation } from "react-i18next";
import { BrowserRouter, PathRouteProps, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Pager from "~/Pager";
import { isAnimatedScrolling } from "~/ScrollAnchor/util";

import Header from "./app/Header";
import AppRoutes, { AppRoute } from "./app/Routes";
import "./app/Styles.scss";
import "./app/Theme.scss";
import "./index.scss";
import "./localization";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

/**
 * Sets up the application within the root.
 *
 * @param children The children of the application.
 */
function Setup({ children }: { children: ReactNode }) {
	return (
		<RecoilRoot>
			<ThemeProvider />
			<BrowserRouter>{children}</BrowserRouter>
		</RecoilRoot>
	);
}

/**
 * Sets up the application routes using `react-router-dom`.
 */
function SetupRoutes({ appRoutes }: { appRoutes: AppRoute[] }) {
	const { t } = useTranslation();

	// Get the navigate function and cache it in a way that won't cause cascading re-renders.
	//
	// We're using it for its effects and not for its state, so we abuse `useState` and object references
	// to keep the latest copy without causing `onPageCache` to be invalidated (and thus `routes`).
	const navigateFn = useNavigate();
	const [navigateContainer] = useState<{ navigate: typeof navigateFn }>({ navigate: navigateFn });
	navigateContainer.navigate = navigateFn;

	// Callback to replace the navigation URL.
	const onPageChange = useCallback(
		(id: string, { path }: { path: string }) => {
			console.debug("Scrolled into page", path);
			navigateContainer.navigate(path, { replace: true });
		},
		[navigateContainer, t]
	);

	// Calculate the app routes.
	type AppPage = Extract<typeof AppRoutes[0], { type: "paged" } | { type: "single" }>;
	type AppPages = AppPage[];
	const appPages = useMemo(
		() => appRoutes.filter(({ type }) => type === "paged" || type === "single") as AppPages,
		[appRoutes]
	);

	const routes: { route: { id: string; path: string }; routeProps: PathRouteProps }[] = useMemo(() => {
		return appPages.flatMap((route) => {
			if (route.type === "single") {
				return [
					{
						route,
						routeProps: {
							key: route.path,
							path: route.path,
							element: <route.page />,
						},
					},
				];
			}

			const pager = (
				<Pager
					onPageChange={onPageChange}
					pages={route.pages.map(({ path, id, page }) => {
						return {
							id,
							metadata: { path },
							page,
						};
					})}
				/>
			);

			return route.pages.map((route) => ({
				route,
				routeProps: { path: route.path, key: route.path, element: pager },
			}));
		});
	}, [appPages, onPageChange]);

	// Update page title whenever the route changes.
	const { pathname } = useLocation();
	const [lastPathname, setLastPathname] = useState<string>("");
	if (pathname !== lastPathname) {
		setLastPathname(pathname);
		const currentRouteId = routes.find(({ route }) => route.path === pathname)?.route.id;
		document.title = t(`header.links.${currentRouteId ?? "unknown"}.title`);
	}

	// Render the routes for `react-router-dom`.
	return (
		<Routes>
			{routes.map(({ routeProps }) => (
				<Route {...routeProps} />
			))}
		</Routes>
	);
}

// Render the root.
root.render(
	<React.StrictMode>
		<Setup>
			<Header appRoutes={AppRoutes} />
			<SetupRoutes appRoutes={AppRoutes} />
		</Setup>
	</React.StrictMode>
);

// Listen for scroll events.
// This is used for styling.
let lastScrollY = 0;
let lastScrollAtTouch = 999999; /* Show the header at page load. */
window.addEventListener("touchstart", () => (lastScrollAtTouch = window.scrollY));
window.addEventListener(
	"scroll",
	() => {
		requestAnimationFrame(() => {
			const body = document.body;
			if (isAnimatedScrolling(body.parentElement as HTMLHtmlElement)) {
				body.setAttribute("data-scroll-direction", "up");
				body.style.setProperty("--scroll-offset-since-touch", "999999");
				return;
			}

			const scrollY = window.scrollY;
			const deltaScrollY = scrollY - lastScrollY;
			lastScrollY = scrollY;

			// Calculate scroll direction.
			body.setAttribute("data-scroll-direction", deltaScrollY < 0 ? "up" : "down");

			// Calculate scroll position.
			const bottomScrollY = body.clientHeight - window.innerHeight;
			body.setAttribute(
				"data-scroll-position",
				scrollY <= 0 ? "top" : scrollY >= bottomScrollY ? "bottom" : "scrolled"
			);

			// Calculate scroll delta.
			body.style.setProperty("--scroll-offset-since-touch", `${scrollY - lastScrollAtTouch}px`);
		});
	},
	{ passive: true }
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
