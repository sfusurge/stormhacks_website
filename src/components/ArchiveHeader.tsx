import ArchiveInfo from "../archives";
import classes from "../styles/ArchiveHeader.module.css";

export interface ArchiveHeaderProps extends ArchiveInfo {
}

export default function ArchiveHeader(props: ArchiveHeaderProps) {
	return (
		<div className={classes.header}>Header</div>
	);
}
