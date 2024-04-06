import React, { useState, useEffect } from 'react';
import NavBar from "../components/NavBar";
import PlaceHoldImage from "../../public/images/placehold-img.png";
import NavIcon from "../../public/images/navicon-img.png";
import Image from 'next/image';
import Badge from "../../public/images/mlh.svg";

function Landing() {

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

    
        handleResize();

      
        window.addEventListener('resize', handleResize);

        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <div className='flex items-center justify-center bg-customPurple'>
            <div className={`${isSmallScreen ? '' : 'w-[80vw]'} `}>
            {!isSmallScreen && <NavBar />}
            {isSmallScreen && 
                
                <div className=' pt-5 bg-customPurple' style={{ position: 'fixed', top: 0, width: '100vw', zIndex: 100 }}>
                <button className='pl-5' onClick={toggleNav}><Image src={NavIcon} height={40}/></button>

                {showNav && 
                  
                    <div className='h-[95vh] flex items-center justify-center bg-customPurple'>
                        <ul className=' h-[40vh] items-center text-white w-[80vw]' >
                            <li className='text-customPurple border text-white py-1 px-4 rounded mt-1  text-center hover:bg-white hover:text-customPurple'>Home</li>
                            <li className='text-customPurple border text-white py-1 px-4 rounded mt-2  text-center hover:bg-white hover:text-customPurple'>About</li>
                            <li className='text-customPurple border text-white py-1 px-4 rounded  mt-2 text-center hover:bg-white hover:text-customPurple'>Sponsors</li>
                            <li className='text-customPurple border text-white py-1 px-4 rounded  mt-2 text-center hover:bg-white hover:text-customPurple'>FAQ</li>
                            <li className='text-customPurple border text-white py-1 px-4 rounded  mt-2 text-center hover:bg-white hover:text-customPurple'>Surge</li>
                        </ul>
                        
                    </div>
    
                 
                }
            </div>
            }
            
            <div className={`${isSmallScreen ? 'items-start pt-32' : 'items-center h-[40vh] pt-24'} pl-5 flex flex-col bg-customPurple justify-center text-white`}>
                <div className='absolute top-0 right-0 mr-5 mt-5' style={{ zIndex: 101 }}>
                            <Image width={80} src={Badge} />
                </div>
                <h2>May 18–19, 2024 @ sfu burnaby</h2>
                <h1 className='text-5xl mt-1 mb-5'>StormHacks 2024</h1>
                <p className={`${isSmallScreen ? '' : 'text-center'} text-xs justify-center max-w-sm`}>Lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
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
            <div className='pt-10 bg-customPurple flex justify-center'>
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
        </div>
    )
}

export default Landing;
