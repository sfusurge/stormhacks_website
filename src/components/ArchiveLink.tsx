import classes from "../styles/ArchiveLink.module.css";

import ArchiveInfo from "../archives";

import {Link} from "react-router-dom";

export interface ArchiveLinkProps extends ArchiveInfo {
}

export default function ArchiveLink(props: ArchiveLinkProps) {
	return (
		<Link to={`/${props.year}/`} className={classes.archiveLink}>
			<div className={classes.innerPadding}>
				{props.year}
			</div>
		</Link>
	);
}
