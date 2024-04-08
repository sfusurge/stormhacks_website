import React, { useState, useEffect } from 'react';
import PlaceHoldImage2 from "../../public/images/placehold2-img.png";
import Image from 'next/image';

function NavBar() {

    return (
        <div>
        <div className='pb-5 flex pt-5 justify-between text-white ' style={{ position: 'fixed', top: 0, width: '', zIndex: 100 }}>
            <ul className=' flex items-center ' >
                <Image width={40} src={PlaceHoldImage2}/>
              
                <li className='ml-5 mr-5 hover:underline'>Home</li>
                <li className='mr-5 hover:underline'>About</li>
                <li className='mr-5 hover:underline'>Sponsors</li>
                <li className='mr-5 hover:underline'>FAQ</li>
                <li className='mr-5 hover:underline'>Surge</li>
            </ul>
            <ul className='flex mr-8'>
                <Image width={40} src={PlaceHoldImage2}/>
                <Image width={40} src={PlaceHoldImage2}/>
                <Image width={40} src={PlaceHoldImage2}/>
                <Image width={40} src={PlaceHoldImage2}/>
            </ul>
            
        </div>

        </div>
    )
}

export default NavBar;
