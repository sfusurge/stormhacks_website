import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import SurgeSocialLinks from "~/SurgeSocialLinks";

/**
 * Navigation links.
 */
function NavLinks() {
	const { t } = useTranslation();

	return (
		<>
			<Link to={"/sponsors"}>{t("header.link.sponsors")}</Link>
			<Link to={"/faq"}>{t("header.link.faq")}</Link>
		</>
	);
}

/**
 * The header for the StormHacks 2023 website.
 */
function Header() {
	return (
		<header>
			<nav>
				<NavLinks />
			</nav>
			<SurgeSocialLinks />
		</header>
	);
}

export default Header;
