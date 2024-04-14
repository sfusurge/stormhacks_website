import ClickableImage from "./ClickableImage";
import { useEffect, useState } from "react";

function SponsorsGallery() {
  const [isLoading, setIsLoading] = useState(true);
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    try {
      fetch("/image-manifest.json")
        .then((res) => res.json())
        .then((data) => {
          setImageData(data);
          setIsLoading(false);
        });
    } catch (e) {
      console.log(e);
    }
    return;
  }, []);

  return (
    <>
      <div className="grid place-content-center pb-16">
        <h4 className="font-vollkorn-sc text-base text-white text-center pb-2">
          THANK YOU TO
        </h4>
        <h2 className="font-vollkorn text-heading text-white text-center">
          Our Sponsors
        </h2>
      </div>

      <div className="grid desktop:full-bleed desktop:grid-cols-3 mobile:grid-cols-1 gap-12 place-content-center justify-items-center">
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <>
            {imageData.sponsors.map((image, index) => (
              <ClickableImage
                key={index}
                src={image.imagePath}
                altText={image.altText}
                imageUrl={image.imageUrl}
                height={200}
                width={200}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default SponsorsGallery;
