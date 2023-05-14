import cx from "classnames";

import { useCallback, useMemo } from "react";

import Image, { inferType } from "~/Image";

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
	 * If active, the photo will have a border.
	 */
	active?: boolean;

	/**
	 * An extra CSS class to apply.
	 */
	className?: string;

	onClick?: (exec: Omit<ExecPhotoProps, "onClick" | "className">) => void;
};

/**
 * A photo of one of the execs.
 */
function ExecPhoto({ name, photo, onClick, className, active, ...props }: ExecPhotoProps) {
	const onClickData = useMemo(() => ({ name, photo, active, ...props }), [name, photo, active, props]);
	const onClickCallback = useCallback(() => onClick?.(onClickData), [onClick, onClickData]);

	const image = useMemo(() => {
		const type = inferType(photo) ?? "image/jpeg";

		return (
			<Image
				className={cx(className, Styles.photo, { [Styles.active]: active })}
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
	}, [name, photo, className, active, onClickCallback]);

	return <div className={Styles.container}>{image}</div>;
}

export default ExecPhoto;
