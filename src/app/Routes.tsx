import { Route } from "react-router-dom";
import { Routes as Pages } from "react-router-dom";

import MainPage from "$page/Main";

/**
 * Single-page application routes.
 */
function Routes() {
	const mainPageInstance = <MainPage />;

	return (
		<Pages>
			<Route index element={mainPageInstance} />
			<Route path="/sponsors" element={mainPageInstance} />
			<Route path="/faq" element={mainPageInstance} />
		</Pages>
	);
}

export default Routes;
