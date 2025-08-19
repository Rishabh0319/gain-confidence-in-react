import React from 'react';
import image from '../assets/images/avatars/image-amyrobson.png';
import Reply from '../assets/images/icon-reply.svg?react';

const Comment = () => {
    return (
        <div className='w-full flex items-center justify-center rounded-md py-4 bg-[var(--White)]'>
            <div className='w-[10%] h-full flex  justify-center'>
                <div className='bg-[var(--Grey-50)] w-8 h-22 flex flex-col rounded-md items-center justify-between'>
                    <p className='text-[var(--Grey-500)] font-medium cursor-pointer'>+</p>
                    <p className='text-[var(--purple-600)] font-medium'>12</p>
                    <p className='text-[var(--Grey-500)] font-medium cursor-pointer'>-</p>
                </div>
            </div>
            <div className='w-[90%]'>
                <div className='flex items-center justify-between pr-8 '>
                    <div className='flex items-center gap-2'>
                        <div className='w-8 h-8 rounded-full'>
                            <img src={image} alt="user_icon" className='w-full bg-cover' />
                        </div>
                        <p className='font-medium'>amyrobson</p>
                        <p className='text-[var(--Grey-500)]'>1 month ago</p>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <Reply />
                        <p className='font-medium cursor-pointer text-[var(--purple-600)]'>
                            Reply
                        </p>
                    </div>
                </div>
                <div className='pt-2'>
                    <p className='text-[var(--Grey-500)]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima iste repellendus sint modi dolores obcaecati, nobis perspiciatis ducimus eligendi iusto quos. Libero voluptatibus tempore earum sint recusandae, ullam a consequuntur?</p>
                </div>
            </div>
        </div>
    )
}

export default Comment