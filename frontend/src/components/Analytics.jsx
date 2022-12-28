import React from 'react'
import Laptop from '../data/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#c964f4] font-bold '>HOW DOES IT WORKIFY?</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Find Talent and Work on the same platform</h1>
          <p>
          At The WORKIFY, our mission is to help more talents build the kind of virtual business that lights them up, gives them freedom.
          See our top resources,enterpreneur and freelancers.
          <p className='text-[#7d25a3] md:text-2xl font-bold py-2'>WORK & EARN. HIRE & GROW.</p>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Analytics
