import React from 'react'
import NavBar from '../../../components/NavBar/FreelancerNavBar'
import ViewProfile from '../ViewProfile/ViewProfile'

const ProfilePage = () => {
  return (
    <>
      <div className='flex flex-col gap-0 -scroll-mb-50'>
      <NavBar/>
      <ViewProfile/>
          
      
      </div>
    </>
  
  )
}

export default ProfilePage
