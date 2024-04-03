import React, { useState, useEffect } from 'react';
import NavBar from "../components/NavBar";
import PlaceHoldImage from "../../public/images/placehold-img.png";

import Image from 'next/image';

function Landing() {

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768); // Assuming small screen size is less than 768px
        };

    
        handleResize();

      
        window.addEventListener('resize', handleResize);

        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className=''>
            {!isSmallScreen && <NavBar />}
            <div className={`${isSmallScreen ? 'items-start pt-20' : 'items-center h-[40vh]'} pl-5 flex flex-col bg-customPurple justify-center text-white`}>
                <h2>May 18–19, 2024 @ sfu burnaby</h2>
                <h1 className='text-5xl mt-1 mb-5'>StormHacks 2024</h1>
                <p className='text-xs justify-center'>Lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                <div className='mt-6'>
                
                    <button className={`${isSmallScreen ? 'block w-[90vw] mb-5' : ''} border border-transparent hover:border-customPurple text-customPurple bg-white  py-2 px-4 rounded mr-5`}>
                        Register as hacker
                    </button>
                    <button className={`${isSmallScreen ? 'block w-[90vw] mb-10' : '' } border hover:bg-white hover:text-customPurple text-white py-2 px-4 rounded`}>
                        Register as mentor/volunteer
                    </button>
                </div>
            </div>
            <div className='bg-customPurple h-[51vh] flex justify-center items-center text-white'>
                <Image src={PlaceHoldImage} width={600} alt="image"/>
            </div>
            <div className='pt-10 bg-customPurple w-[100vw] flex justify-center'>
                <div className={`w-[70vw] ${isSmallScreen ? '': 'flex'} bg-customPurple text-center justify-around mb-10`}>
                    <div className='flex flex-col text-white mb-5'>
                        <p className='text-5xl mb-2'>24</p>
                        <p>hours</p>
                    </div>
                    <div className='flex flex-col text-white mb-5'>
                        <p className='text-5xl mb-2'>400+</p>
                        <p>total hackers</p>
                    </div>
                    <div className='flex flex-col text-white mb-5'>
                        <p className='text-5xl mb-2'>$90k</p>
                        <p>in prizes</p>
                    </div>
                    <div className='flex flex-col text-white mb-5'>
                        <p className='text-5xl mb-2'>90</p>
                        <p>diverse projects</p>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default Landing;
