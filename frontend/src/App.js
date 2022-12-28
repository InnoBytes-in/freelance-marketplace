import React from "react";

import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';

import FreelancerDashboard from "./pages/Freelancer/FreelancerDashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/LogIn";
import RequireAuth from "./components/Auth/RequireAuth";
import Register from "./pages/SignUp";
import HomePage from "./pages/HomePage/HomePage";
import { ToastContainer } from "react-toastify";
import FreelancerBidPage from "./pages/Freelancer/FreelancerBidPage";
import RequireAuthClient from "./components/Auth/RequireAuthClient";
import ProfilePage from "./pages/Profile/ProfilePage/ProfilePage";
import { EditProfile } from "./pages/Profile/ProfilePage/EditProfile";
import Freelancers from "./pages/Client/Freelancers";
import { ClientDashboard } from "./pages/Client/ClientDashboard";

import ProjectDashboard from "./pages/Client/ProjectDashboard";
import ProjectDetails from "./pages/Client/ProjectDetails";


const App = () => {

  return (
    <div>
      <ToastContainer/>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Register/>}/>
        <Route path ="/" element={<HomePage/>}/>
        <Route path ="/projects/details/:name" element={<FreelancerBidPage/>}/>
        <Route path="/" element={<RequireAuth />}>
          <Route path="freelancerDashboard" element={<FreelancerDashboard/>}/>
        </Route>
        <Route path="/" element={<RequireAuthClient />}>
          <Route path="clientDashboard" element={<ClientDashboard/>}/>
        </Route>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/profilesettings" element={<EditProfile/>}/>
        <Route path="/freelancers" element={<Freelancers/>}/>
        <Route path="/" element={<RequireAuthClient />}>
          <Route path="/clientprojects" element={<ProjectDashboard/>}/>
          <Route path="/projectdet" element={<ProjectDetails/>}/>

        </Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;