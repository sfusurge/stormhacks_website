import ClickableImage from "../components/ClickableImage";
import { useEffect, useState } from "react";

function CurrentSponsors() {
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
    <div className="grid desktop:full-bleed mobile:grid-cols-1 grid-flow-col place-content-center">
      <h4 className="text-2xl">THANK YOU TO</h4>
      <h2 className="text-4xl">Our Sponsors</h2>

      {isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          {imageData.images.current_sponsors.map((image, index) => (
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
  );
}

export default CurrentSponsors;
