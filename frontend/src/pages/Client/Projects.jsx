import React from 'react'

const Projects = () => {

  const skills =['skill1','skill2','skill3']

  return (
    <div>
    <div className="flex flex-row border-2 shadow-lg h-60 rounded-xl hover:bg-gray-200">
      <div className="flex flex-col flex-grow">
        <div className='pt-2 pl-5 text-lg font-bold text-purple-600'>
          <p>projectData.name</p>
        </div>
        <div className='pl-5 text-sm'>
          <p>Budget &#8377; projectData.hrRateFrom - projectData.hrRateTo INR per hour</p>
        </div>
        <div className='flex pl-5 mt-5'>
          <p>projectData.details</p>
        </div>
        <div className='text-sm pl-5 pt-24 flex flex-row '>
          {
            skills.map((skill) => (
              <ul>
                <li className='mr-4'>{skill}</li>
              </ul>
            ))
          }
        </div>
      </div>
      <div className='flex flex-col py-5 px-5'>
        <div className='flex mt-36'>
          <a href="/projectdet">
          <button className=" rounded-md w-full px-4 py-3  tracking-wide text-white transition-colors duration-200 transform bg-purple-700 hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
            Details
          </button>
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Projects
