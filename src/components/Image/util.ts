const mimeByExtension = new Map(
	Object.entries({
		".jpg": "image/jpeg",
		".jpeg": "image/jpeg",
		".png": "image/png",
		".webp": "image/webp",
		".svg": "image/svg+xml",
	})
);

/**
 * Infers the image type based on the image's file extension.
 *
 * @param url The URL of the image.
 * @returns The associated MIME type, or null if not known.
 */
export function inferType(url: string | URL): string | null {
	const pathname = typeof url === "string" ? url : url.pathname;
	const matches = /\.([^/.]+)$/g.exec(pathname);
	if (matches == null) {
		return null;
	}

	const extname = matches[1].toLowerCase();
	return mimeByExtension.get(extname) ?? `image/${extname.substring(1) /* this is probably fine? */}`;
}
