import React from 'react';
import styles from './TrackCard.module.css';

interface TrackCardProps {
    imageUrl: string;
    alt: string;
    trackSubtitle: string,
    trackTitle: string;
    trackDescription: string;
}

const TrackCard: React.FC<TrackCardProps> = ({ imageUrl, alt, trackSubtitle, trackTitle, trackDescription }) => {
    return (
        <div className={styles['track-card-container']}>
            <div className={styles['image-container']}>
                <img 
                    src={imageUrl}
                    alt={alt}
                />
            </div>
            <div className="mb-10">
                <h2 className="font-vollkorn font-semibold uppercase text-base">
                    {trackSubtitle}
                </h2>
                <h1 className="font-vollkorn text-[2.5rem]">
                    {trackTitle}
                </h1>
                <p className="font-vollkorn text-base">
                    {trackDescription}
                </p>
            </div>
        </div>
    );
}

export default TrackCard;