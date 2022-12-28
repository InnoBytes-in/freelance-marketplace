import React, { useEffect, useState, useRef } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

import {ReactComponent as Logo} from '../../data/logo.svg';

import dataServive from '../../API/dataServive';

const FreelancerNavBar = () => {
  let Menus = [
    {name:"Profile",link:"/profile"},
    {name:"Settings",link:"/"},
    {name:"Logout",link:"/login"},
  ];

  let Links = [
    {name:"Dashboard",link:"/freelancerDashboard"},
    {name:"My Projects",link:"/"},
    {name:"Reports",link:"/"},
    {name:"Inbox",link:"/"},
    {name:"Feedback",link:"/"},
  ];

  const [open,setOpen]=useState(false);
  const [openDropDown, setOpenDropDown]=useState(false);

  const freelancer = JSON.parse(localStorage.getItem("user"));

  const [name, setName] = useState([]);
  const [img, setImg] = useState([]);

  const menuRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    setName(freelancer.firstName);
    dataServive.getImage(freelancer.id).then((response) => {
      setImg(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  },[]);

  const closeOpenMenus = (e) => {
    if (menuRef.current && openDropDown && !menuRef.current.contains(e.target) && !imgRef.current.contains(e.target)) {
      setOpenDropDown(false);
    }
  }

  document.addEventListener('mousedown',closeOpenMenus);

  return (
  <div className='flex relative shadow-lg h-16'>
    <Logo onClick={() => {}} className = "cursor-pointer w-16 h-16 pl-1" />
    <div className = 'flex-grow flex items-center'>
      <ul className={`md:flex md:items-center h-16 flex md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in`}>
       
          {
            Links.map((link)=>(
                <li key={link.name} className='md:ml-8 text-lg md:py-6 h-16 md:px-4 hover:bg-purple-300'>
                <a href={link.link} className='text-gray-800'>{link.name}</a>
                </li>
           
            ))
          }
      
      </ul>
    </div>
    <div className='relative'>
      <div
              ref={imgRef}
              onClick={(e) => setOpenDropDown(!openDropDown)}
              className="flex items-center gap-2 my-5 cursor-pointer pr-5 hover:bg-light-gray rounded-lg"
            >
              <img
                className="rounded-full w-8 h-8"
                src={`data:image/jpeg;base64,${img}`}
                alt="user-profile"
              />
              <p>
                <span className="text-gray-400 text-14">Hi,</span>{' '}
                <span className="text-gray-400 font-bold ml-1 text-14">
                  {name}
                </span>
              </p>
              <MdKeyboardArrowDown className="text-gray-400 text-14" />
      </div>
      {
        openDropDown && (
        <div ref={menuRef} className='bg-white p-4 w-52 shadow-lg absolute -left-14 top-24 overflow-visible'>
          <ul>
            {Menus.map((menu) => (
              <li className ="p-2 text-lg cursor-pointer rounded hover:bg-blue-100" key={menu.name}>
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>
        )
      }
    </div>
  </div>
)
}

export default FreelancerNavBar;