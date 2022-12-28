import React from 'react'

const ReviewCard = () => {
  return (
    <div className='bg-purple-100 h-50 outline-double outline-purple-700 rounded-xl'>
    <div className=" flex flex-row  shadow-lg  h-56 ">
      <div className="flex flex-col flex-grow py-5">
        <div className=' text-lg font-bold'>
          <p>First Name Last Name</p>
        </div>
        <div className='font-semibold'>
          <p>test review 1</p>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default ReviewCard;
