import React, { useState, useEffect } from 'react';
import PlaceHoldImage2 from "../../public/images/placehold2-img.png";
import Image from 'next/image';

function NavBar() {

    return (
        <div className="flex items-center content-center py-10">
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

export default NavBar;
