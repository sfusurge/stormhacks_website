import { createRef, useCallback, useEffect } from "react";

import Styles from "./MLHBadge.module.scss";

interface Props {
	/**
	 * If provided, the badge container will attempt to constraint itself to the width of the element
	 * that this ref points to.
	 */
	constrainToWidthOfElement?: React.RefObject<HTMLElement>;
}

function MLHBadge(props: Props) {
	const containerRef = createRef<HTMLAnchorElement>();
	const woeRef = props.constrainToWidthOfElement;

	const updateWidth = useCallback(() => {
		if (woeRef == null || woeRef.current == null) return;
		if (containerRef.current == null) return;

		const woeStyle = window.getComputedStyle(woeRef.current);
		containerRef.current.style.setProperty("--max-badge-width", woeStyle.width);
	}, [containerRef, woeRef]);

	useEffect(() => {
		if (woeRef == null) return;

		updateWidth();
		window.addEventListener("resize", updateWidth);
		return () => window.removeEventListener("resize", updateWidth);
	}, [woeRef, updateWidth]);

	return (
		// eslint-disable-next-line react/jsx-no-target-blank
		<a
			id="mlh-trust-badge"
			className={Styles.badgeContainer}
			ref={containerRef}
			href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white"
			target="_blank">
			<img
				className={Styles.badge}
				src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg"
				alt="Major League Hacking 2023 Hackathon Season"
			/>
		</a>
	);
}

export default MLHBadge;
