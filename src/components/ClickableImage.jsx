import { GOOGLE_FONT_PROVIDER } from "next/dist/shared/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const ClickableImage = ({ src, altText, imageUrl, width, height }) => {
  return (
    <Link key="key" target="_blank" href={imageUrl}>
      <Image src={src} alt={altText} width={width} height={height} />
    </Link>
  );
};

export default ClickableImage;
