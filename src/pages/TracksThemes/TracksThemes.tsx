import React from 'react';
import TrackCard from "@/components/TracksThemes/TrackCard";
import TracksInfo from "./TracksInfo.json"
import styles from './TracksThemes.module.css'; 

const TracksThemes = () => {
    return (
        <div className={styles.trackCardsContainer}>
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