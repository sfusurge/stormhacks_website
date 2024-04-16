import React from "react";
import ImageCard from "@/components/TracksThemes/ImageCard";
import { TracksAndThemes } from "@/manifest";

const TracksThemes = () => {
  return (
    <div className="mb-16 flex desktop:flex-row desktop:items-stretch mobile:flex-col justify-between text-white items-center">
      {TracksAndThemes.map((track, index) => (
        <ImageCard
          key={index}
          imageUrl={track.imageUrl}
          altText={track.altText}
          subtitle={track.subtitle}
          title={track.title}
          description={track.description}
        />
      ))}
    </div>
  );
};

export default TracksThemes;
