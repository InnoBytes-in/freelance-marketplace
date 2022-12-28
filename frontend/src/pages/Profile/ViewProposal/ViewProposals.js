import React from 'react'
import CLientNavBar from '../NavBar/ClientNavBar'
import ProposalS from './ProposalS'

const ViewProposals = () => {
  return (
    <div>
      <CLientNavBar/>
      <div className='min-h-screen bg-slate-300 p-8 '>
      <ProposalS/>
      </div>
      
    </div>
  )
}

export default ViewProposals
