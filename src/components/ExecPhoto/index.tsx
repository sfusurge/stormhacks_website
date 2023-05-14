import cx from "classnames";

import { useCallback, useMemo } from "react";

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

	/**
	 * The person's chosen website URL.
	 */
	link?: string;

	/**
	 * An extra CSS class to apply.
	 */
	className?: string;

	onClick?: (exec: Omit<ExecPhotoProps, "onClick" | "className">) => void;
};

/**
 * A photo of one of the execs.
 */
function ExecPhoto({ name, photo, onClick, className, ...props }: ExecPhotoProps) {
	const onClickCallback = useCallback(() => onClick?.({ name, photo, ...props }), [onClick, name, photo, props]);

	const image = useMemo(() => {
		const ext = /(\..+)$/.exec(photo)?.[1]?.toLowerCase();
		const type = EXTENSION_TO_MIME[ext as keyof typeof EXTENSION_TO_MIME];

		return (
			<Image
				className={cx(className, Styles.photo)}
				alt={name}
				fallbackSrc={photo}
				onClick={onClickCallback}
				src={[
					{
						src: photo,
						type: type,
						density: "1x",
					},
				]}
			/>
		);
	}, [name, photo, className, onClickCallback]);

	return <div className={Styles.container}>{image}</div>;
}

const EXTENSION_TO_MIME = {
	".png": "image/png",
	".jpg": "image/jpeg",
	".jpeg": "image/jpeg",
};

export default ExecPhoto;
