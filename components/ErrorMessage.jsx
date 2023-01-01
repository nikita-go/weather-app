import React from 'react';

export default function ErrorMessage() {
    return (
        <div className='absolute flex justify-center items-center top-7 w-[50%] bg-[#ff5555] p-2 rounded z-40'>
            <p className='text-white text-lg'>No matching location found! Please enter a different location.</p>
        </div>
    )
}