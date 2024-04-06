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
            <div className={styles['text-container']}>
                <h2 className={styles['trackSubtitle']}>
                    {trackSubtitle}
                </h2>
                <h1 className={styles['trackTitle']}>
                    {trackTitle}
                </h1>
                <p className={styles['trackDescription']}>
                    {trackDescription}
                </p>
            </div>
        </div>
    );
}

export default TrackCard;