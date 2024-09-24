import ClickableImage from "../ClickableImage";
import { SponsorTier, SponsorInfo, Sponsors } from "@/manifest";
import { useEffect, useState } from "react";

function SponsorsGallery() {

  return (
    <>
      <div className="grid place-content-center mb-8" id="sponsors">
        <h4 className="font-vollkorn-sc text-base text-white text-center pb-2">
          THANK YOU TO
        </h4>
        <h2 className="font-vollkorn text-heading text-white text-center">
          Our Sponsors
        </h2>
      </div>

      <div className="grid desktop:full-bleed desktop:grid-cols-3 mobile:grid-cols-1 mobile:gap-24 desktop:gap-20 place-content-center justify-items-center">
        {
          Sponsors.slice().sort((a, b) => b.tier - a.tier).map((data, index) => (
            <div className="my-auto" key={index}>
              <ClickableImage
                src={data.imagePath}
                altText={data.altText}
                imageUrl={data.imageUrl}
                height={200}
                width={200}
              />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default SponsorsGallery;

