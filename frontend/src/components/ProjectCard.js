import React, {useEffect, useState} from 'react';
import dataServive from "../API/dataServive";

import { useNavigate } from 'react-router-dom';

import AuthService from '../API/authService';


const ProjectCard = ({projectData}) => {

  const data = AuthService.getCurrentUser();

  const navigate = useNavigate();

  const handleClick = (e) => {
    console.log(data)
    if (data.role.role == "FREELANCER") {
      navigate(`/projects/details/${projectData.name.replace(/ /g, "-")}`, { state : projectData });
    } else if (data.role.role == "CLIENT") {
      navigate("/details")
    }
  }

  return (
    <div className="flex flex-row border-2 shadow-lg h-60 hover:bg-gray-200">
      <div className="flex flex-col flex-grow">
        <div className='pt-2 pl-5 text-lg font-bold text-purple-600'>
          <p>{projectData.name}</p>
        </div>
        <div className='pl-5 text-sm'>
          <p>Budget &#8377; {projectData.hrRateFrom} - {projectData.hrRateTo} INR</p>
        </div>
        <div className='flex pl-5 mt-5'>
          <p>{projectData.details}</p>
        </div>
        <div className='text-sm pl-5 pt-24 flex flex-row '>
          {
            projectData.skills.map((skill) => (
              <ul>
                <li className='mr-4'>{skill}</li>
              </ul>
            ))
          }
        </div>
      </div>
      <div className='flex flex-col py-5 px-5'>
        <div className='flex mt-40'>
          <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 hover:bg-purple-600 focus:outline-none focus:bg-purple-600" onClick={handleClick}>
            Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;