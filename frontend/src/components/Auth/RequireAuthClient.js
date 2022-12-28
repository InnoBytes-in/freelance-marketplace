import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthService from "../../API/authService";

const RequireAuthClient = () => {
    const [client, setClient] = useState(AuthService.getCurrentUser().role.role==="CLIENT"?true:null);

    return client ? <Outlet /> : <Navigate to="/" />;
}

export default RequireAuthClient;