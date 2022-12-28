import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthService from "../../API/authService";

const RequireAuth = () => {
    const [freelancer, setFreelancer] = useState(AuthService.getCurrentUser().role.role==="FREELANCER"?true:null);

    return freelancer ? <Outlet /> : <Navigate to="/" />;
}

export default RequireAuth;