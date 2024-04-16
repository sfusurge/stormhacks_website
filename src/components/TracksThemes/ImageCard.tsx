import React from "react";
import Image from "next/image";

export interface CardProps {
  imageUrl: string;
  altText: string;
  subtitle: string;
  title: string;
  description: string;
}

const ImageCard: React.FC<CardProps> = ({
  imageUrl,
  altText,
  subtitle,
  title,
  description,
}) => {
  return (
    <div className="desktop:w-[237px] mobile:w-[300px]">
      <div className="mb-5 desktop:w-[237px] desktop:h-[217px] mobile:w-[300px] mobile:h-[200px]">
        <Image
          src={imageUrl}
          alt={altText}
          width={0}
          height={0}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mb-10 w-full">
        <h2 className="font-vollkorn font-semibold uppercase text-base">
          {subtitle}
        </h2>
        <h1 className="font-vollkorn text-heading">{title}</h1>
        <p className="font-vollkorn text-base">{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
