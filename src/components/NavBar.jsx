import React, { useState, useEffect } from 'react';
import PlaceHoldImage2 from "../../public/images/placehold2-img.png";
import Image from 'next/image';

function NavBar() {
    return (
        <div className='pb-5 flex justify-between pt-5 bg-customPurple text-white'>
            <ul className='flex ml-5 items-center'>
                <Image width={40} src={PlaceHoldImage2}/>
              
                <li className='ml-5 mr-5'>Home</li>
                <li className='mr-5'>About</li>
                <li className='mr-5'>Sponsors</li>
                <li className='mr-5'>FAQ</li>
                <li className='mr-5'>Surge</li>
            </ul>
            <ul className='flex mr-5'>
                <Image width={40} src={PlaceHoldImage2}/>
                <Image width={40} src={PlaceHoldImage2}/>
                <Image width={40} src={PlaceHoldImage2}/>
                <Image width={40} src={PlaceHoldImage2}/>
            </ul>
        </div>
    )
}

export default NavBar;
