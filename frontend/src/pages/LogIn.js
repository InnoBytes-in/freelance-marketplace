import React, {useContext, useEffect, useState } from 'react';
import AuthService from '../API/authService';

import { useNavigate } from 'react-router-dom';

import {toast} from 'react-toastify';

import {ReactComponent as Logo} from '../data/logo.svg'

const Login = () => {
  let navigate = useNavigate();

  const [userNameOrEmail, setUserNameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    AuthService.login(userNameOrEmail, password).then(
      () => {
        
        if (AuthService.getCurrentUser().role.role == "FREELANCER") {
          navigate("/freelancerDashboard")
        } else if (AuthService.getCurrentUser().role.role == "CLIENT") {
          navigate("/clientDashboard");
        }
        
        toast.success("Login successfull");
        window.location.reload();
      },
      (error) => {
        const resMessage = 
        (error.response && 
          error.response.data &&
          error.response.data.message) || 
          error.message ||
          error.toString();
          
          setLoading(false);
          setMessage(resMessage);
          toast.error("Invalid Login");
      }
    );
  };

  return (
    <div className='flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50'>
      <div>
          <Logo className = "cursor-pointer w-20 h-20" alt="Logo"/>
      </div>

      <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
        <form onSubmit = {handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Email or Username
            </label>
            <div className="flex flex-col items-start">
              <input
                type="text"
                value={userNameOrEmail}
                name="userNameOrEmail"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm border-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={(e) => setUserNameOrEmail(e.target.value)}
              />
            </div>
          </div>
          
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Password
            </label>
            <div className="flex flex-col items-start">
              <input
                type="password"
                value={password}
                name="emailOrUsername"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm border-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={(e) => setPassword(e.target.value)}
                
              />
            </div>
          </div>

          <div className="flex items-center mt-4">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Login
            </button>
          </div>
        </form>

        <div className="mt-4 text-grey-600">
            Don't have an account?{" "}
            <span>
               <a className="text-purple-600 hover:underline" href="#">
                  Sign Up
               </a>
            </span>
        </div>

      </div>
    </div>
  )
}

export default Login;