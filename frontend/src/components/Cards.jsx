import React from 'react'
import Single from '../data/work.jpg'
import Double from '../data/talent.jpg'


const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-50 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Post A Job </h2>
            <p className='text-center text-2xl font-bold'>Required Skills</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>Find a Talent</p>
            </div>
            <button className='bg-[#c869f1] text-[black] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Get Started</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-50 mx-auto mt-[-3rem] bg-white' src={Double} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Find your Work </h2>
            <p className='text-center text-2xl font-bold'>Your Skills</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>Find a Job</p>
            </div>
            <button className='bg-[#c869f1] text-[black] w-[200px] rounded-md font-medium my-6 mx-auto align-middle px-6 py-3'>Get Started</button>
        </div>
    </div>
  </div>
  )
}

export default Cards
