import React from 'react';
import Image from "next/image";

interface TrackCardProps {
    imageUrl: string;
    alt: string;
    trackSubtitle: string,
    trackTitle: string;
    trackDescription: string;
}

const TrackCard: React.FC<TrackCardProps> = ({ imageUrl, alt, trackSubtitle, trackTitle, trackDescription }) => {
    return (
        <div className="desktop:w-[237px] mobile:w-[382px]">
            <div className="mb-5 desktop:w-[237px] desktop:h-[217px] mobile:w-[382px] mobile:h-[200px]">

               <Image 
                    src={imageUrl}
                    alt={alt}
                    width={0}
                    height={0}
                    className="w-full h-full object-cover"
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