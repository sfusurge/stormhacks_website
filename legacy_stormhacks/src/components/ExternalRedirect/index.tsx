import { useEffect } from "react";

/**
 * A react component that when rendered, will navigate to an external website.
 */
function ExternalRedirect({
	href,
	replace,
}: {
	/**
	 * The destination URL.
	 */
	href: string;

	/**
	 * Replace the current URL in the browser history, rather than adding to it.
	 */
	replace?: boolean;
}) {
	useEffect(() => {
		if (replace) {
			window.location.replace(href);
		} else {
			window.location.assign(href);
		}
	});

	return <></>;
}

export default ExternalRedirect;
