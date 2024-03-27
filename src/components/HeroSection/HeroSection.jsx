import React from 'react'
import banners from"../../assets/banner.jpeg"

const HeroSection = () => {
  return (
    <>
    <div className='relative  mt-[73px]'>
        <div>
            <img src={banners} alt='' className='w-full object-cover object-center'/>
        </div>
        <div className='absolute top-[40%] w-full text-end right-5'>
            <h1 className='text-1xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-500'>Discover Your Next Adventure!</h1>
            <p className='text-[10px]lg:text-2xl mt-2 lg:mt-5 font-semibold'>Shop Our Latest Arrival & UnLeash Your Style</p>
        </div>
    </div>
    </>
  )
}

export default HeroSection