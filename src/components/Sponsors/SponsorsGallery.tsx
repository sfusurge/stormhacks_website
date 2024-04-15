import ClickableImage from "../ClickableImage";
import { SponsorInfo, Sponsors } from "@/manifest";
import { useEffect, useState } from "react";

function SponsorsGallery() {
  return (
    <>
      <div
        className="grid place-content-center desktop:mb-16 mobile:mb-8"
        id="sponsors"
      >
        <h4 className="font-vollkorn-sc text-base text-white text-center pb-2">
          THANK YOU TO
        </h4>
        <h2 className="font-vollkorn text-heading text-white text-center">
          Our Sponsors
        </h2>
      </div>

      <div className="mb-16 grid desktop:full-bleed desktop:grid-cols-3 mobile:grid-cols-1 gap-12 place-content-center justify-items-center">
        {Sponsors.map((data, index) => (
          <div className="my-auto">
            <ClickableImage
              key={index}
              src={data.imagePath}
              altText={data.altText}
              imageUrl={data.imageUrl}
              height={200}
              width={200}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default SponsorsGallery;
