import { Layout } from "./Common/Layout"
import { LandingPage } from "./LandingPage"
import Dashboard from "./Pages/Dashboard"
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register"
import { Routes, Route } from 'react-router-dom';



function App() {

  return (
    <>
    <Routes>

   <Route path='/' element={<Login/>}/>

   <Route path='/register' element={<Register/>}/>
  <Route path='/landing' element={<LandingPage/>}/>

    </Routes>
        {/* <Layout>
          <Dashboard></Dashboard>
        </Layout> */}

    </>
  )
}

export default App
