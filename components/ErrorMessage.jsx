import React from 'react';

export default function ErrorMessage() {
    return (
        <div className='relative flex justify-center top-10 z-40'>
            <div className='flex justify-center items-center min-w-[50%] bg-[#ff5555] p-2 rounded'>
                <p className='text-white text-lg'>No matching location found! Please enter a different location.</p>
            </div>
        </div>
    )
}