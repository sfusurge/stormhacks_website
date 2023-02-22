import { useLocation } from "react-router-dom";

import Page from "~/Page";
import ScrollAnchor from "~/ScrollAnchor";

import { AboutStormhacksSection } from "./AboutStormhacks";
import { AboutSurgeSection } from "./AboutSurge";
import { FAQSection } from "./FAQ";
import { SponsorsSection } from "./Sponsors";

/**
 * The main page.
 *
 * For the 2023 website, this contains the contents of the other pages.
 * This is because we're doing a single-page scrolling website.
 */
function MainPage() {
	return (
		<Page className="width-limited">
			<Main />
		</Page>
	);
}

export function Main() {
	return (
		<>
			<ScrollAnchor id="/">
				<AboutStormhacksSection />
			</ScrollAnchor>
			<ScrollAnchor id="/sponsors">
				<SponsorsSection />
			</ScrollAnchor>
			<ScrollAnchor id="/faq">
				<FAQSection />
			</ScrollAnchor>
			<ScrollAnchor id="/about-us">
				<AboutSurgeSection />
			</ScrollAnchor>
		</>
	);
}

export default MainPage;
