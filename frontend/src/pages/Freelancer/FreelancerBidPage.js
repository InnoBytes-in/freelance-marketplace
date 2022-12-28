import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import FreelancerNavBar from '../../components/NavBar/FreelancerNavBar'
import AuthService from '../../API/authService'
import dataServive from '../../API/dataServive'
import { toast } from 'react-toastify'
import authHeader from '../../API/authHeader'

const FreelancerBidPage = () => {

  const state = useLocation();
  const user = JSON.parse(localStorage.getItem('user'));

  const initialState = {
    bidAmount:state.state.hrRateTo,
    duration:30,
    proposal:'',
    bidDate:''
  }

  const [data, setData] = useState(initialState);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleChange=(event,property) => {
    setData({...data, [property]:event.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("");
    console.log(authHeader());
    console.log(user);

    dataServive.placeBid(user.id, state.state.id , data.bidAmount, data.duration, data.proposal, data.bidDate).then(
      (response) => {
        toast.success(response.data);
        resetPlaceBidForm();
      },
      (error) => {
        const resMessage = 
          (error.response &&
              error.response.data &&
              error.response.data.message) ||
              error.message ||
              error.toString();

          setMessage(resMessage);
          toast.error(resMessage);
      }
    );
  };

  const resetPlaceBidForm = () => {
    setData(initialState);
  };

  return (
    <div>
      <FreelancerNavBar/>
      <div className='min-h-screen bg-slate-100'>
        <div className='flex flex-col gap-4 p-8 pl-36'>

          <div className='flex flex-col bg-white rounded-lg w-1000 shadow-md'>
            <div className='flex flex-row'>
              <h1 className='p-4 text-xl font-bold w-5/6'>
                {state.state.name}
              </h1>

              <div className='p-4 w-1/6 font-semibold text-lg'>
                <p>&#8377; {state.state.hrRateFrom} - {state.state.hrRateTo} INR</p>
              </div>
            </div>

            <div className='bg-black h-[1px]'></div>

            <div className='flex flex-col p-4'>
              <p className=''>{state.state.details}</p>
              
              <div className='flex flex-col'>
                <h2 className='pt-4 font-bold text-lg'>Skills</h2>
                <div className='text-sm pt-4 flex flex-row '>
                  {
                    state.state.skills.map((skill) => (
                    <ul>
                      <li className='p-3 mx-2 border-violet-600 border-1 rounded-lg'>{skill}</li>
                    </ul>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className='flex flex-col bg-white rounded-lg w-1000 shadow-md'>
              <div className='flex flex-row'>
                <h1 className='p-4 text-xl font-bold w-5/6'>
                  Place Bid
                </h1>
              </div> 

              <div className='bg-black h-[1px]'></div>

              <div className='flex flex-col p-4'>
                <span className='font-bold pt-6'>Enter Bid Amount</span>
                <div className='flex flex-row border-1 m-2 border-gray-300 rounded w-1/2 hover:border-purple-500'>
                  
                  <p className='text-2xl p-1'>&#8377;</p>

                  <input
                    type="number"
                    value={data.bidAmount}
                    name="bidamount"
                    className="outline-none"
                    placeholder='Bid Amount'
                    onChange={(e) => handleChange(e, 'bidAmount')}
                  />

                  <p className='p-1 text-lg font-semibold pr-2'>INR</p>
                
                </div>

                <span className='font-bold pt-6'>Enter duration</span>
                <div className='flex flex-row m-2 border-1 border-gray-300 rounded w-1/2 hover:border-purple-500'>
                
                  <input
                    type="number"
                    value={data.duration}
                    name='days'
                    className="outline-none"
                    placeholder='Time required for completion'
                    onChange={(e) => handleChange(e, 'duration')}
                  />

                  <p className='p-1 text-lg font-semibold pr-2'>Days</p>

                </div>

                <span className='font-bold pt-6'>Enter Proposal</span>
                <textarea
                  type="text"
                  value={data.proposal}
                  name='proposal'
                  className="border-1 m-2 p-2 h-44 border-gray-300 rounded outline-none focus:border-purple-500 break-words"
                  placeholder='Your proposal for this project'
                  onChange={(e) => handleChange(e, 'proposal')}
                />
                    
                <div className="ml-auto mr-2 mt-4">
                  <button className="px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                    Place Bid
                  </button>
                </div>
              </div>
    
            </div>
          </form>
        </div>
      
      </div>
    </div>
  )
}

export default FreelancerBidPage
