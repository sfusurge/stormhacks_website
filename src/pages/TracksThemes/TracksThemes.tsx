import React from 'react';
import TrackCard from "@/components/TracksThemes/TrackCard";
import TracksInfo from "./TracksInfo.json"
import styles from './TracksThemes.module.css'; 
import CardImage from '../../../public/images/card-img.svg'

const TracksThemes = () => {
    return (
        <div className={styles.trackCardsContainer}>
            {TracksInfo.map((track, index) => (
                <TrackCard 
                    key={index}
                    imageUrl={CardImage.src} 
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