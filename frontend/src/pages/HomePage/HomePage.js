import React from 'react'
import HNavbar from '../../components/homepagenavbar/HNavbar'
import HomeBanner from '../../components/HomeBanner'
import Analytics from '../../components/Analytics'
import Newsletter from '../../components/Newsletter'
import Cards from '../../components/Cards'
import Footer from '../../components/Footer'

const HomePage = () => {
  return (
    <div className='bg-[#000300]'>
      <HNavbar/>
      <HomeBanner/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default HomePage
