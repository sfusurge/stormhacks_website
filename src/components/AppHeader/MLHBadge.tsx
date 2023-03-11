import Styles from "./Header.module.scss";

function MLHBadge() {
	const badge_style = {
		display: "block",
		maxWidth: "1000px",
		minWidth: "200px",
		position: "fixed" as "fixed",
		right: "1rem",
		top: "0px",
		width: "10%",
		zIndex: "10000",
	};

	return (
		// eslint-disable-next-line react/jsx-no-target-blank
		<a
			id="mlh-trust-badge"
			style={badge_style}
			href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white"
			target="_blank">
			<img
				src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg"
				alt="Major League Hacking 2023 Hackathon Season"
				style={{ width: "40%" }}></img>
		</a>
	);
}
export default MLHBadge;
