import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className='rounded-md overflow-hidden shadow-lg bg-white'>
                <img className='w-full h-60 object-cover' src={props.imageUrl} alt={props.title} />
                <div className='px-6 py-4'>
                    <h2 className='font-bold text-xl mb-2'>{props.title}</h2>
                    <p className='text-gray-700 text-base'>
                        {props.description}
                    </p>
                </div>
                <div className='px-6 py-4 flex items-center justify-between'>
                    <a href="" className='text-purple-500 hover:text-purple-700'>Read More</a>
                </div>
            </div>
        </>
    )
}

export default Card