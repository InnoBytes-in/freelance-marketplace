import React from 'react'
import photo from '../../../data/photod.jpg'

const ProposalS = () => {
  return (
    <div className=' bg-white rounded-xl'>
    <div className="flex flex-row shadow-lg h-60 ">
      <div className="flex py-5 pl-5 w-48">
        <img src={photo}/>
      </div>
      <div className="flex flex-col flex-grow py-5">
        <div className=' text-lg font-bold'>
          <p>First Name Last Name</p>
        </div>
        <div className='font-bold text-gray-500 underline-offset-4'>
          <p>USername</p>
        </div>
        <div>
          <p> Freelancer Propsal Description</p>
        </div>
      </div>
      <div className='flex flex-col py-5 px-5'>
        <div>
          <p className='text-xl font-black text-right'>&#8377; 5000 INR </p>
          <p className='text-lg font-medium text-right'>In 30 days</p>
        </div>
        <div className="inline-flex rounded-md pt-[5.1rem]">
        <button
              className="inline-flex items-center justify-center rounded-md border border-transparent  bg-indigo-600 px-5 py-3 mr-4 outline-1 outline-black text-base font-medium text-white hover:bg-indigo-700"
            >
              Accept
            </button>
            <button
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-5 py-3  outline-1 outline-black text-base font-medium text-indigo-600 hover:bg-indigo-200"
            >
              Reject
            </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProposalS
