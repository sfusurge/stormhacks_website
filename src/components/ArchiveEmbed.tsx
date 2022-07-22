import ArchiveInfo from "../archives";
import classes from "../styles/ArchiveEmbed.module.css";

export interface ArchiveEmbedProps extends ArchiveInfo {
}

export default function ArchiveEmbed(props: ArchiveEmbedProps) {
	return (
		<iframe
			className={classes.embed} src={props.site}
			title={`StormHacks ${props.year}`}
		></iframe>
	);
}
