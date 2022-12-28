import React from 'react'
import Typed from 'react-typed';

const HomeBanner = () => {
  return (
    <div className='text-white'>
    <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      <p className='text-[#c964f4] font-bold p-2'>
      “Opportunities don’t happen, you create them.”
      </p>
      <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
        Find Talents,Find Work.
      </h1>
      <div className='flex justify-center items-center'>
        <p className='md:text-5xl sm:text-4xl text-xl font-bold'>
          Here you can you find your
        
        <Typed
        className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4'
          strings={['Work', 'Talent', 'Skills']}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
        </p>
      </div>
      <p className='md:text-2xl text-xl font-bold text-gray-500'>Find your work to increase your revenue.</p>
      <button className='bg-[#c869f1] w-[130px] rounded-md font-medium my-6 mx-auto py-3 text-black my'>Get Started</button>
    </div>
  </div>
  )
}

export default HomeBanner
