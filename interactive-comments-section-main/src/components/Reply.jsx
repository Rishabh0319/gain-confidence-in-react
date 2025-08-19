import React from 'react'
import image from '../assets/images/avatars/image-amyrobson.png';

const Reply = () => {
    return (
        <div className='w-full p-4 flex justify-between items-start bg-[var(--White)] rounded-md'>
            <div className='w-8 h-8 rounded-full'>
                <img src={image} alt="user_icon" className='w-full bg-cover' />
            </div>
            <div className='w-[80%] h-20 rounded-md border border-[var(--Grey-100)] flex flex-col items-start px-4 py-2'>
                <input type="text" placeholder='Add a comment...' className='w-full focus:outline-none' />
            </div>
            <div>
                <button className='bg-[var(--purple-600)] text-[var(--White)] rounded-md px-6 py-2'>SEND</button>
            </div>
        </div>
    )
}

export default Reply