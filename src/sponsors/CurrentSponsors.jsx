import ClickableImage from "../components/ClickableImage";
import Image from "next/image";
import { useEffect, useState } from "react";

function CurrentSponsors() {
  const [isLoading, setIsLoading] = useState(true);
  const [imageData, setImageData] = useState(null);

  // Fetch image manifest
  useEffect(async () => {
    await fetch("/image-manifest.json")
      .then((res) => res.json())
      .then((data) => {
        setImageData(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="grid desktop:grid-flow-row desktop:grid-cols-3 mobile:grid-cols-1 place-content-evenly">
      <p className=""></p>

      {isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          {imageData.images.current_sponsors.map((image) => (
            <ClickableImage
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
  );
}

export default CurrentSponsors;
