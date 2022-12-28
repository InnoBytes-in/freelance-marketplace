import React ,{useState} from 'react'

const HNavbar = () => {
    const [nav,setNav]=useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-start h-24 max-w-[1240px] mx-8 px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#a938d9]'>WORKIFY.</h1>
      <div>
        <ul className='hidden md:flex' >
          <li className='p-4'>Home</li>
          <li className='p-4'>Contact</li>
          <li className='p-4'>About</li>
          <li className='p-4'><a href='/login'>LogIn</a></li>
          <li className='p-4'><a href='/signup'>SignUp</a></li>
          
        </ul>
      </div>
    </div>
  )
}

export default HNavbar
