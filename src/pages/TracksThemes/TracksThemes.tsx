import React from "react";
import ImageCard from "@/components/TracksThemes/ImageCard";
import TracksInfo from "./TracksInfo.json";

const TracksThemes = () => {
  return (
    <div className="mb-16 flex desktop:flex-row mobile:flex-col justify-between text-white items-center">
      {TracksInfo.map((track, index) => (
        <ImageCard
          key={index}
          imageUrl={track.imagePath}
          alt={track.alt}
          subtitle={track.trackSubtitle}
          title={track.trackTitle}
          description={track.trackDescription}
        />
      ))}
    </div>
  );
};

export default TracksThemes;
