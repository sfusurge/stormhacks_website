import { GOOGLE_FONT_PROVIDER } from "next/dist/shared/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const ClickableImage = ({ imagePath, altText, width, height }) => {
  useEffect(() => {
    console.log(imagePath);
  });

  return (
    <Link key="key" target="_blank" href="https://www.google.com">
      <Image src={imagePath} alt={altText} width={width} height={height} />
    </Link>
  );
};

export default ClickableImage;
