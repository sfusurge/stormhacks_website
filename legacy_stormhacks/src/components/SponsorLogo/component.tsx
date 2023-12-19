import cx from "classnames";

import { FunctionComponent, ReactElement, SVGProps } from "react";

import { inferType } from "~/Image";
import { Image } from "~/Image";
import { SVGComponent } from "~/SVG";

import Styles from "./SponsorLogo.module.scss";

type SponsorLogoProps = {
	/**
	 * Additional class names to apply to the element.
	 */
	className?: string;

	/**
	 * If provided, will apply a link to the sponsor logo.
	 */
	href?: string;

	/**
	 * The sponsor's name.
	 */
	name: string;

	/**
	 * The sponsor's logo, or a URL that points to their logo.
	 * If an SVG component is not provided, this will load the logo as an image.
	 */
	logo: SVGComponent | string;
};

/**
 * A sponsor's logo.
 */
export default function SponsorLogo({ className, logo, name, href }: SponsorLogoProps): ReactElement {
	const source = (typeof logo === "string" ? { url: logo } : { svg: logo }) as
		| { svg: FunctionComponent<SVGProps<SVGSVGElement>>; url: never }
		| { url: string; svg: never };

	const image = <LogoImage {...source} alt={`${name} Logo`} className={className} />;

	return (
		<div className={cx(Styles.component)}>
			{href == null && image}
			{href != null && <a href={href}>{image}</a>}
		</div>
	);
}

/**
 * The sponsor's logo image.
 * This may be either an SVG, or a photo.
 */
function LogoImage({
	svg,
	url,
	alt,
	className,
}: { className?: string; alt: string } & (
	| { svg: SVGComponent; url: never }
	| { url: string; svg: never }
)): ReactElement {
	if (svg != null) {
		const LogoSVG = svg;
		return <LogoSVG aria-details={alt} className={cx(Styles.svgLogo, className)} />;
	}

	return (
		<Image
			alt={alt}
			fallbackSrc={url}
			className={cx(Styles.imageLogo, className)}
			src={[
				{
					src: url,
					type: inferType(url) ?? "image/unknown",
					density: "1x",
				},
			]}
		/>
	);
}
