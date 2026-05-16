// protectedRoutes.jsx
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
    
    const token = localStorage.getItem('sb-pbkyqezdihwomfuaroaz-auth-token');
    
    return token ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoutes;