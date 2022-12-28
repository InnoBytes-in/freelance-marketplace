import React from 'react'
import CLientNavBar from '../../components/NavBar/ClientNavBar'
import Projects from './Projects'

const ProjectDashboard = () => {
  return (
    <div>
      <CLientNavBar/>
      <div className='flex flex-col p-4'>
        <div className='flex text-xl font-bold pl-4'>
          <h1 className='p-2'>Projects</h1>
        </div>
        <div className='pl-5'>
            <div className="mb-3 xl:w-96">
              <div className="input-group relative flex flex-row items-stretch w-auto mb-4">
                <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                <button className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out items-center" type="button" id="button-addon2">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg>
                </button>
              </div>
            </div>
        </div>
        </div>

        
        
        <div className='flex flex-col gap-2 px-8 py-5'>
          <h1 className='text-xl font-bold px-3 gap-2 text-violet-700'>
            Open Projects
          </h1>
          {
          
              <Projects/>
          }
      </div>
      
      <div className='flex flex-col gap-2 px-8 py-5'>
          <h1 className='text-xl font-bold px-3 gap-2 text-violet-700'>
            Active Projects
          </h1>
          {
          
              <Projects/>
          }
      </div>


      <div className='flex flex-col gap-2 px-8 py-5'>
          <h1 className='text-xl font-bold px-3 gap-2 text-violet-700'>
            Closed Projects
          </h1>
          {
          
              <Projects/>
          }
      </div>


    </div>
  )
}
export default ProjectDashboard

