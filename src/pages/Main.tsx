import classes from "../styles/Page_Main.module.css";
import {ReactComponent as StormhacksIcon} from "../assets/stormhacks.svg";
import {ReactComponent as SurgeIcon} from "../assets/surge.svg";

import Archive from "../archives";
import ArchiveLink from "../components/ArchiveLink.tsx";

import {useEffect} from "react";

export interface MainProps {
	archives: Archive[];
}

export default function Main(props: MainProps) {
	useEffect(() => {
		document.body.classList.add(classes.body);
		return () => {
			document.body.classList.remove(classes.body);
		};
	});

	return (
		<div className={classes.main}>
			<header>
				<h1 className={classes.header}>
					StormHacks
					<StormhacksIcon/>
				</h1>
				<div className={classes.subheader}>
					Hosted by {' '}
					<a href="https://sfusurge.com" className={classes.swipeLink}>
						<span>SFU SURGE</span>
						<SurgeIcon/>
					</a>
				</div>
			</header>

			<ul className={classes.links}>
				{props.archives.map(archive => {
					return (
						<li key={archive.year}>
							<ArchiveLink {...archive}/>
						</li>
					)
				})}
			</ul>
		</div>
	);
}
