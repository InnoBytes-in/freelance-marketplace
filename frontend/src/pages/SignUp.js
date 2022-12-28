import React from 'react';
import { useState } from 'react';
import {ReactComponent as Logo} from '../data/logo.svg';
import AuthService from '../API/authService';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = () =>{

    const initialState = {
        firstName:'',
        lastName:'',
        userName:'',
        email:'',
        password:'',
        role:'',
        joinDate:''
    }

    const [data,setData] = useState(initialState);
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const navigate = useNavigate();


    const handleChange=(event, property)=>{
        setData({...data, [property]:event.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        setMessage("");
        setSuccessful(false);

        AuthService.register(data.firstName, data.lastName, data.userName, data.email, data.password, data.role, data.joinDate).then(
            (response) => {
                setMessage(response.data.message);
                toast.success(message);
                resetRegisterForm();
                setSuccessful(true);
                navigate("/login");
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
                setSuccessful(false);  
            }
        );  
    };

    const resetRegisterForm = () => {
        setData(initialState);
    };

    return (
        <div className='flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50'>
            <div>
                <Logo className = "cursor-pointer w-20 h-20" alt="Logo"/>
            </div>
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                        >
                            First Name
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                    type="text"
                                    value={data.firstName}
                                    name="firstname"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm border-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={(e)=>handleChange(e, 'firstName')}
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Last Name
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                    type="text"
                                    value={data.lastName}
                                    name="lastname"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm border-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={(e)=>handleChange(e, 'lastName')}
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Email
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                    type="email"
                                    value={data.email}
                                    name="email"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm border-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={(e)=>handleChange(e, 'email')}
                            />
                        </div>
                    </div>
                
                    <div className="mt-4">
                        <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Password
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                    type="password"
                                    value={data.password}
                                    name="password"
                                    className="block w-full mt-1 border-gray-300 rounded-md border-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={(e)=>handleChange(e, 'password')}
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Username
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                    type="text"
                                    value={data.userName}
                                    name="username"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm border-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={(e)=>handleChange(e, 'userName')}
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Are you
                        </label>
                        <div className="flex flex-col items-start">
                            <select className='block w-full mt-1 border-gray-300 rounded-md shadow-sm border-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' value={data.role} onChange={(e)=>handleChange(e, 'role')} name="role" id="role">
                                <option className='text-black' value="FREELANCER">Freelancer</option>
                                <option className='text-black' value="CLIENT">Client</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex items-center mt-4">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Register
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-grey-600">
                        Already have an account?{" "}
                        <span>
                            <a className="text-purple-600 hover:underline" href="#">
                                Log in
                            </a>
                        </span>
                </div>
            </div>
      </div>
    )
}

export default Register;