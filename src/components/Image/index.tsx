// TODO(eth-p): Refactor me into my own package at some point.

export type ImageProps = {
	/**
	 * The image alt-text.
	 */
	alt?: string;

	/**
	 * The image sources.
	 */
	src: ImageSource[];

	/**
	 * The fallback image.
	 */
	fallbackSrc: string;

	/**
	 * Class names to add.
	 */
	className?: string;
};

export type ImagePropsWithSize = ImageProps & {
	/**
	 * The expected width of the image.
	 */
	width: number;

	/**
	 * The expected height of the image.
	 */
	height: number;
};

export type ImageSource = {
	/**
	 * The source URL.
	 */
	src: string;

	/**
	 * The density of the image.
	 */
	density: "1x" | "1.5x" | "2x";

	/**
	 * The media query for this image.
	 *
	 * If the media query does not match, the source will be skipped.
	 * This can be used for things like dark/light color schemes.
	 */
	media?: string;

	/**
	 * The MIME type of the image.
	 * If the browser does not support the image type, the source will be skipped.
	 *
	 * Common values:
	 *  - `image/png` (PNG)
	 *  - `image/jpeg` (JPEG)
	 *  - `image/svg+xml` (SVG)
	 *  - `image/webp` (WebP)
	 */
	type: string;
};

/**
 * A responsive image.
 *
 * Computing the picture sources may be an expensive operation, and the {@link React.useMemo useMemo} hook could be
 * an easy optimization.
 *
 * https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
 */
function Image({ alt, src, fallbackSrc, ...rest }: ImageProps | ImagePropsWithSize) {
	const sourceMap = new Map<string, ImageSource[]>();
	for (const source of src) {
		// Create a key that is a tuple of properties that represent a unique <source> element.
		const key = `${source.type ?? ""}|${source.media}|${source.type}`;

		// Get the densities available for this source.
		let densities = sourceMap.get(key);
		if (densities === undefined) {
			densities = [];
			sourceMap.set(key, densities);
		}

		// Add the source image.
		densities.push(source);
	}

	// Create <source> elements.
	const sourceEls = Array.from(sourceMap.values()).map((sources, i) => {
		const type = sources[0].type;
		const media = sources[0].media;
		const srcSet = sources.map(({ density, src }) => (density === "1x" ? src : `${src} ${density}`)).join(",");

		return <source srcSet={srcSet} type={type} media={media} key={i} />;
	});

	return (
		<picture {...rest}>
			{sourceEls}
			<img src={fallbackSrc} alt={alt} />
		</picture>
	);
}

export default Image;
