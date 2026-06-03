import Layout from "./Common/Layout"
import { LandingPage } from "./LandingPage"
import Dashboard from "./Pages/Dashboard"
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register"
import { RouterProvider,Route ,createBrowserRouter ,createRoutesFromElements} from 'react-router-dom';
import ProtectedRoutes  from "./routes/protectedRoutes"
import PublicRoute from "./routes/publicRoute";
import BriefAnalyzer from "./Pages/BriefAnalyzer";
import { History } from "./Pages/History";
import { ProposalWriter } from "./Pages/ProposalWriter";


  const router = createBrowserRouter(
    createRoutesFromElements(
   <>
   <Route element={<PublicRoute />}>
   <Route path='/' element={<Login/>}/>
   <Route path='/register' element={<Register/>}/>
    <Route path='/landing' element={<LandingPage/>}/>

   </Route>
  <Route element={<ProtectedRoutes />}> 
  <Route element={<Layout/>}>
  {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
  <Route path='/BriefAnalyzer' element={<BriefAnalyzer/>}/>
  <Route path='/history' element={<History/>}/>
  <Route path='/proposalWriter' element={<ProposalWriter/>}/>
   </Route>
  <Route path='*' element={<Login/>} />
  </Route>
</>
    
        ))
        const App = () => {
          return(
            <RouterProvider router={router} />
         
          )
        }
    

export default App
