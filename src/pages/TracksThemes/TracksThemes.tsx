import React from 'react';
import TrackCard from "@/components/TracksThemes/TrackCard";
import TracksInfo from "./TracksInfo.json"

const TracksThemes = () => {
    return (
        <div className="flex desktop:flex-row mobile:flex-col justify-between items-center py-20 px-10 desktop:px-64">
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