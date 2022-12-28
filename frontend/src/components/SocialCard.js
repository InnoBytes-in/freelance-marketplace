import React, {useEffect, useState} from 'react';
import dataServive from "../API/dataServive";
import CLientNavBar from './NavBar/ClientNavBar';


const SocialCard = ({freelancerData}) => {

  const [image, setImage] = useState([]);

  console.log(image);

  const fetchData = () => {
    dataServive.getImage(freelancerData.id).then(response => 
      setImage(response.data)
    )
    .catch(error => {
      console.log({error})
    })
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div>
        <div className="flex flex-row shadow-lg h-60">
          <div className="flex py-5 pl-5 w-48">
            <img src={`data:image/jpeg;base64,${image}`}/>
          </div>
          <div className="flex flex-col flex-grow py-5 px-5">
            <div className=' text-lg font-bold'>
              <p>{freelancerData.firstName} {freelancerData.lastName}</p>
            </div>
            <div className='font-bold'>
              <p>{freelancerData.freelancerDTO.title}</p>
            </div>
            <div>
              <p>{freelancerData.freelancerDTO.description}</p>
            </div>
            <div className='flex mt-24'>
              <p>{freelancerData.freelancerDTO.city}, {freelancerData.freelancerDTO.country}</p>
            </div>
          </div>
          <div className='flex flex-col py-5 px-5'>
            <div>
              <p className='text-xl font-black'>&#8377; {freelancerData.freelancerDTO.hrRate} INR </p>
              <p>per hour</p>
            </div>
            <div className='flex mt-24'>
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Hire
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SocialCard;