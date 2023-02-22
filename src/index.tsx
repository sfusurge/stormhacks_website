import { ThemeProvider } from "@sfusurge/react-theme-utils";

import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Header from "./app/Header";
import Routes from "./app/Routes";
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

// Render the root.
root.render(
	<React.StrictMode>
		<Setup>
			<Header />
			<Routes />
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
