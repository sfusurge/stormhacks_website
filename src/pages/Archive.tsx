import classes from "../styles/Page_Archive.module.css";

import ArchiveInfo from "../archives";

import ArchiveEmbed from "../components/ArchiveEmbed.tsx";
// import ArchiveHeader from "../components/ArchiveHeader.tsx";

import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export interface ArchiveProps extends ArchiveInfo {
}

export default function Archive(props: ArchiveProps) {
	const { pathname } = useLocation();
	const splat = pathname.substring(`/${props.year}/`.length);

	useEffect(() => {
		// Change document title and the root path for the shared iframe history.
		document.title = `${props.year} - StormHacks Archive`;
		(window as any).frameHistory.base = props.year;
	});

	useEffect(()  => {
		// Change the body styles.
		document.body.classList.add(classes.body);
		return () => {
			document.body.classList.remove(classes.body);
		};
	});

	useEffect(()  => {
		if (props.backgrounds != null) {
			const background = props.backgrounds[`/${splat}`]
				?? props.backgrounds['/'];

			// Change the body background.
			document.body.style.background = background;
			return () => {
				document.body.style.background = null;
			};
		}
	});

	return (
		<div className={classes.archive}>
			{/*<ArchiveHeader {...props} />*/}
			<main className={classes.archiveMain}>
				<article>
					<ArchiveEmbed {...props} site={props.site + splat} />
				</article>
			</main>
		</div>
	);
}
