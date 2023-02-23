import cx from "classnames";

import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import InlineSVG from "~/SVG";
import { ScrollAnchorNavLink } from "~/ScrollAnchor/components";
import SurgeSocialLinks from "~/SurgeSocialLinks";

import { ReactComponent as StormhacksIcon } from "$asset/icon/stormhacks.svg";

import Styles from "./Header.module.scss";

/**
 * Navigation links.
 */
function NavLinks() {
	return (
		<nav className={Styles.linkContainer}>
			<LinkToSection path={"/sponsors"} tKey="header.link.sponsors" />
			<LinkToSection path={"/faq"} tKey="header.link.faq" />
			<LinkToSection path={"/about-us"} tKey="header.link.about-us" />
			<a href="about:blank">A Long Link</a>
			<a href="about:blank">Even More Links</a>
		</nav>
	);
}

/**
 * A link to a section of the main page.
 * If the link is the current section, it will have an extra class applied to it.
 */
function LinkToSection({ path, tKey }: { path: string; tKey: string }) {
	const { t } = useTranslation();
	return (
		<ScrollAnchorNavLink path={path} activeClassName={Styles.currentSection}>
			{t(tKey)}
		</ScrollAnchorNavLink>
	);
}

function LinkToMain() {
	return (
		<nav className={Styles.headerStickyLeft}>
			<ScrollAnchorNavLink path={"/"} className={Styles.logoLink}>
				<InlineSVG svg={StormhacksIcon} />
			</ScrollAnchorNavLink>
		</nav>
	);
}

function HeaderApplyButton() {
	return (
		<div className={Styles.headerStickyRight}>
			<button>Apply</button>
		</div>
	);
}

/**
 * The header for the StormHacks 2023 website.
 */
function Header() {
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
				<LinkToMain />
				<NavLinks />
				<div className={Styles.spacer} />
				<div className={Styles.linkContainer}>
					<SurgeSocialLinks />
				</div>
				<HeaderApplyButton />
			</div>
		</header>
	);
}

export default Header;
