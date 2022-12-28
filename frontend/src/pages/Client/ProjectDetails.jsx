import React from 'react'
import CLientNavBar from '../../components/NavBar/ClientNavBar'
import ProposalS from '../Profile/ViewProposal/ProposalS'


const ProjectDetails = () => {
  return (
    <div className=''>
    <CLientNavBar/>
    <div className='flex flex-col gap-2 px-8 py-5 rounded-md bg-slate-200'>
    <div className="flex flex-row border-2 shadow-lg h-48 bg-white">
      <div className="flex flex-col flex-grow">
        <div className='pt-2 pl-5 text-lg font-bold text-purple-600'>
          <p>projectData.name</p>
        </div>
        
        <div className='flex pl-5 mt-5'>
          <p>projectData.details</p>
        </div>
        </div>
        </div>
        </div>

       <div className=' bg-slate-200 px-8'>
        <ProposalS/>
       </div>

     </div>
  )
}

export default ProjectDetails
