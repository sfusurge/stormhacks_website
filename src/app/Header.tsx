import cx from "classnames";

import { useEffect, useRef } from "react";

import SurgeSocialLinks from "~/SurgeSocialLinks";

import Styles from "./Header.module.scss";
import HeaderNav from "./HeaderNav";
import { AppRoute } from "./Routes";

/**
 * The header for the StormHacks 2023 website.
 */
function Header({ appRoutes }: { appRoutes: AppRoute[] }) {
	const headerRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const headerEl = headerRef.current;
		if (headerEl == null) return;

		const refreshScrollableAttributes = () => {
			const isScrolledLeft = headerEl.scrollLeft <= 0;
			const isScrolledRight = headerEl.scrollLeft >= headerEl.scrollWidth - headerEl.clientWidth - 1;
			headerEl.setAttribute("data-scrollable-left", isScrolledLeft ? "no" : "yes");
			headerEl.setAttribute("data-scrollable-right", isScrolledRight ? "no" : "yes");
		};

		// Update the `data-scrollable-left` and `data-scrollable-right` attributes.
		// On mobile, these will be used to change the styles to indicate that there's more to the header.
		refreshScrollableAttributes();
		const listener = () => requestAnimationFrame(refreshScrollableAttributes);

		// Register the listener and return a function to unregister the listener.
		headerEl.addEventListener("scroll", listener, { passive: true });
		return () => headerEl.removeEventListener("scroll", listener);
	}, [headerRef]);

	return (
		<header className={Styles.header} ref={headerRef} id="header">
			<div className={cx(Styles.headerContents, "width-limited")}>
				<HeaderNav appRoutes={appRoutes} />
				<div className={Styles.spacer} />
				<div className={Styles.linkContainer}>
					<SurgeSocialLinks />
				</div>
				<HeaderApplyButton />
			</div>
		</header>
	);
}

function HeaderApplyButton() {
	return (
		<div className={Styles.headerStickyRight}>
			<button>Apply</button>
		</div>
	);
}

export default Header;
