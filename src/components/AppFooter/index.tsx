import { HackathonInfo } from "$constants/about";
import cx from "classnames";

import { useTranslation } from "react-i18next";

import { SocialLinkType } from "~/SocialLink";
import SurgeSocialLinks, { getSurgeSocialLinks } from "~/SurgeSocialLinks";

import { ReactComponent as GraphicMountainLeft } from "$asset/footer-mountain-left.svg";
import { ReactComponent as GraphicMountainRight } from "$asset/footer-mountain-right.svg";
import { ReactComponent as GraphicSkyline } from "$asset/footer-skyline.svg";

import Styles from "./Footer.module.scss";
import GraphicsStyles from "./FooterGraphics.module.scss";

/**
 * The header for the StormHacks 2023 website.
 */
function AppFooter() {
	const { t } = useTranslation();
	const emailLink = getSurgeSocialLinks().find((link) => link.type === SocialLinkType.Email)?.href;

	return (
		<footer>
			<div className={cx(Styles.footerMargin, GraphicsStyles.container)}>
				<div className={GraphicsStyles.mountains}>
					<GraphicMountainLeft className={GraphicsStyles.leftParallax} />
					<GraphicMountainRight className={GraphicsStyles.rightParallax} />
				</div>
				<div className={GraphicsStyles.skyline}>
					<div>
						<GraphicSkyline />
					</div>
				</div>
			</div>
			<div className={cx(Styles.footer)}>
				<div className={cx(Styles.footerContents, "width-limited")}>
					<div className={Styles.socialLinks}>
						<SurgeSocialLinks />
					</div>
					<div className={cx(Styles.links)}>
						<a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">
							{t("footer.mlh-code-of-conduct")}
						</a>
						<a href={emailLink ?? "#"}>{t("footer.email-us")}</a>
						<a href={HackathonInfo.register.sponsor}>{t("footer.become-a-sponsor")}</a>
					</div>
					<div className={cx(Styles.copyright)}>{t("footer.copyright")}</div>
				</div>
			</div>
		</footer>
	);
}

export default AppFooter;
