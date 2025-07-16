import React from 'react'

const Card = () => {
  return (
    <>
        <div className='max-w-sm rounded-md overflow-hidden shadow-lg'>
                <img className='w-full' src='https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg' alt='Placeholder' />
                <div className='px-6 py-4 bg-white'>
                    <div className='font-bold text-xl mb-2'>Card Title</div>
                    <p className='text-gray-700 text-base'>
                        This is a simple card component using Tailwind CSS for styling.
                    </p>
                </div>
                <div className='px-6 py-4 flex items-center justify-between bg-white'>
                    <span className='text-gray-600 text-sm'>#tag</span>
                    <a href="" className='text-blue-500 hover:text-blue-700'>Read More</a>
                </div>
            </div>
    </>
  )
}

export default Card
