import Styles from "./MLHBadge.module.scss";

function MLHBadge() {
	return (
		// eslint-disable-next-line react/jsx-no-target-blank
		<a
			id="mlh-trust-badge"
			className={Styles.badgeContainer}
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
