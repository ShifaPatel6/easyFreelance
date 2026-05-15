import Layout from "./Common/Layout"
import { LandingPage } from "./LandingPage"
import Dashboard from "./Pages/Dashboard"
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register"
import { RouterProvider,Route ,createBrowserRouter ,createRoutesFromElements} from 'react-router-dom';
import ProtectedRoutes  from "./routes/protectedRoutes"
import PublicRoute from "./routes/publicRoute";


  const router = createBrowserRouter(
    createRoutesFromElements(
   <>
   <Route element={<PublicRoute />}>
   <Route path='/' element={<Login/>}/>
   <Route path='/register' element={<Register/>}/>
   </Route>
  <Route element={<ProtectedRoutes />}> 
  <Route element={<Layout/>}>
  {/* <Route path='/landing' element={<LandingPage/>}/> */}
  <Route path='/dashboard' element={<Dashboard/>}/>
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
