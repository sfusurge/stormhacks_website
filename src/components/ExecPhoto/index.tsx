import { useMemo } from "react";

import Image from "~/Image";

import Styles from "./ExecPhoto.module.scss";

export type ExecPhotoProps = {
	/**
	 * The person's name.
	 */
	name: string;

	/**
	 * The person's photo.
	 */
	photo: string;
};

/**
 * A photo of one of the execs.
 */
function ExecPhoto({ name, photo }: ExecPhotoProps) {
	const image = useMemo(() => {
		const ext = /(\..+)$/.exec(photo)?.[1]?.toLowerCase();
		const type = EXTENSION_TO_MIME[ext as keyof typeof EXTENSION_TO_MIME];

		return (
			<Image
				className={Styles.photo}
				alt={name}
				fallbackSrc={photo}
				src={[
					{
						src: photo,
						type: type,
						density: "1x",
					},
				]}
			/>
		);
	}, [name, photo]);

	return <div className={Styles.container}>{image}</div>;
}

const EXTENSION_TO_MIME = {
	".png": "image/png",
	".jpg": "image/jpeg",
	".jpeg": "image/jpeg",
};

export default ExecPhoto;
