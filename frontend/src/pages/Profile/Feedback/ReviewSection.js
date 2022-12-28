import React from 'react'
import ReviewCard from './ReviewCard'

const ReviewSection = () => {
  return (
    <div className='flex flex-col gap-0 -scroll-mb-50'>
        <h1 className='font-bold text-xl text-purple-600 bg-slate-100 px-8 '>Reviews</h1>
        <div className='p-8 bg-slate-100'>
          <ReviewCard />
        </div>
              
        </div>
  )
}

export default ReviewSection
