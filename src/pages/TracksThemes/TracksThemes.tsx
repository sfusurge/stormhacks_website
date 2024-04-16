import React from 'react';
import TrackCard from "@/components/TracksThemes/TrackCard";
import TracksInfo from "./TracksInfo.json"

const TracksThemes = () => {
    return (
        <div className="mb-16 flex desktop:flex-row mobile:flex-col justify-between text-white items-center">
            {TracksInfo.map((track, index) => (
                <TrackCard 
                    key={index}
                    imageUrl={track.imagePath} 
                    alt={track.alt} 
                    trackSubtitle={track.trackSubtitle}
                    trackTitle={track.trackTitle} 
                    trackDescription={track.trackDescription} 
                />
            ))}
        </div>
    );
};

export default TracksThemes;