import React, { useState, useEffect } from 'react';
import PlaceHoldImage2 from "../../public/images/placehold2-img.png";
import NavIcon from "../../public/images/navicon-img.png";
import Image from 'next/image';

function NavBar({ isMobileScreen }) {

    const [showNav, setShowNav] = useState(false);


    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
       <>
       {isMobileScreen ? 
            (
                <div className='w-full pt-5 [background:linear-gradient(180deg,_#241b38,_#231f20)]' style={{ position: 'fixed', top: 0, width: '', zIndex: 100 }}>
                    <button className='' onClick={toggleNav}><Image src={NavIcon} height={40}/></button>

                    {showNav && 
                    
                        <div className=' h-[95vh] flex items-center justify-center'>
                            <ul className='pr-14 w-[80%] h-[40vh] text-white ' >
                                <li className='text-customPurple border text-white py-1 px-4 rounded mt-1  text-center hover:bg-white hover:text-customPurple'>Home</li>
                                <li className='text-customPurple border text-white py-1 px-4 rounded mt-2  text-center hover:bg-white hover:text-customPurple'>About</li>
                                <li className='text-customPurple border text-white py-1 px-4 rounded  mt-2 text-center hover:bg-white hover:text-customPurple'>Sponsors</li>
                                <li className='text-customPurple border text-white py-1 px-4 rounded  mt-2 text-center hover:bg-white hover:text-customPurple'>FAQ</li>
                                <li className='text-customPurple border text-white py-1 px-4 rounded  mt-2 text-center hover:bg-white hover:text-customPurple'>Surge</li>
                            </ul>
                        </div>
                    }
                </div>
            ) 
            :
            (
                <div className="flex items-center content-center py-5">
                    <div className='py-5 flex justify-between text-white ' style={{ top: 0, width: '', zIndex: 100 }}>
                        <ul className='flex items-center' >
                            <Image width={40} src={PlaceHoldImage2}/>
                        
                            <li className='ml-5 mr-5 hover:underline'>Home</li>
                            <li className='mr-5 hover:underline'>About</li>
                            <li className='mr-5 hover:underline'>Sponsors</li>
                            <li className='mr-5 hover:underline'>FAQ</li>
                            <li className='mr-5 hover:underline'>Surge</li>
                        </ul>
                    </div>
                    <div className='flex ml-auto'>
                        <Image width={40} src={PlaceHoldImage2}/>
                        <Image width={40} src={PlaceHoldImage2}/>
                        <Image width={40} src={PlaceHoldImage2}/>
                        <Image width={40} src={PlaceHoldImage2}/>
                    </div>
                </div>
            )
        }
        </>
    )
}

export default NavBar;