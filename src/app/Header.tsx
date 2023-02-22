import cx from "classnames";

import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import InlineSVG from "~/SVG";
import SurgeSocialLinks from "~/SurgeSocialLinks";

import { ReactComponent as StormhacksIcon } from "$asset/icon/stormhacks.svg";

import Styles from "./Header.module.scss";

/**
 * Navigation links.
 */
function NavLinks() {
	const { t } = useTranslation();

	return (
		<nav className={Styles.linkContainer}>
			<Link to={"/sponsors"}>{t("header.link.sponsors")}</Link>
			<Link to={"/faq"}>{t("header.link.faq")}</Link>
			<Link to={"/about-us"}>{t("header.link.about-us")}</Link>
			<a href="about:blank">A Long Link</a>
			<a href="about:blank">Even More Links</a>
		</nav>
	);
}

function NavLinkToMain() {
	return (
		<nav className={Styles.headerStickyLeft}>
			<Link to={"/"} className={Styles.logoLink}>
				<InlineSVG svg={StormhacksIcon} />
			</Link>
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
		console.log("REF", headerRef);
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
		<header className={cx(Styles.header, "width-limited")} ref={headerRef}>
			<div className={Styles.headerContents}>
				<NavLinkToMain />
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
