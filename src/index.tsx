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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
