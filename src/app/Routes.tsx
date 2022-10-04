import React from "react";
import { Route } from "react-router-dom";
import { Routes as Pages } from "react-router-dom";

import Placeholder from "$page/Placeholder";

/**
 * Single-page application routes.
 */
function Routes() {
	return (
		<Pages>
			<Route index element={<Placeholder />} />
		</Pages>
	);
}

export default Routes;
