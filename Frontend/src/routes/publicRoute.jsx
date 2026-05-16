import {Navigate, Outlet} from "react-router-dom";

const PublicRoute = () => {
   const token = localStorage.getItem('sb-pbkyqezdihwomfuaroaz-auth-token');
    
    return token ?  <Navigate to="/BriefAnalyzer" /> :<Outlet /> ;

}
export default PublicRoute;