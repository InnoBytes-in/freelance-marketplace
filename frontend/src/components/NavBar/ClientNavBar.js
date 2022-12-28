import React, { useState } from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { MdKeyboardArrowDown } from 'react-icons/md';

import {ReactComponent as Logo} from 'D:/frontend/src/data/logo.svg';

const CLientNavBar = () => {
  let Links =[
    {name:"Projects",link:"/clientprojects"},
    {name:"Freelancers",link:"/freelancers"}
  ];

  let [open,setOpen]=useState(false);

  return (
  <div className='flex justify-between relative shadow-lg'>
    <Logo onClick={() => {}} className = "cursor-pointer w-20 h-20" />
    <div className = 'flex-grow flex items-center'>
      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
       
          {
            Links.map((link)=>(
                <li key={link.name} className='md:ml-8 text-xl'>
                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                </li>
           
            ))
          }
      
      </ul>
    </div>
    <div className='flex'>
      <TooltipComponent content="Profile" position="BottomCenter">
        <div
              className="flex items-center gap-2 my-5 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
              onClick={() => {}}
            >
              <p>
                <span className="text-gray-400 text-14">Hi,</span>{' '}
                <span className="text-gray-400 font-bold ml-1 text-14">
                  Pranav
                </span>
              </p>
              <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>
      </TooltipComponent>
    </div>
  </div>
)
}

export default CLientNavBar;