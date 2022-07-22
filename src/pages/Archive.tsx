import ArchiveInfo from "../archives";

import ArchiveEmbed from "../components/ArchiveEmbed.tsx";
// import ArchiveHeader from "../components/ArchiveHeader.tsx";

import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export interface ArchiveProps extends ArchiveInfo {
}

export default function Archive(props: ArchiveProps) {
	useEffect(() => {
		document.title = `${props.year} - StormHacks Archive`;
		(window as any).frameHistory.base = props.year;
	});

	const { pathname } = useLocation();
	const splat = pathname.substring(`/${props.year}/`.length);
	return (
		<div className="archive">
			{/*<ArchiveHeader {...props} />*/}
			<main className="archive-main">
				<article>
					<ArchiveEmbed {...props} site={props.site + splat} />
				</article>
			</main>
		</div>
	);
}
