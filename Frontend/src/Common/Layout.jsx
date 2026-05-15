import React from 'react'
import "../css/Layoutstyle.css"
import {Outlet} from "react-router-dom"
import Navbar from '../components/Navbar';
import MainHeader from '../components/mainHeader';
 const Layout = () => {
  return (
    <>
  
    <div className='flex flex-col  min-h-screen'>
   <MainHeader/>
  {/* Sidebar left - fixed */}

  {/* Right side - header + content */}
  <div className='flex flex-1'>
  <Navbar/>
   
    <main className='flex-1 flex justify-center items-center'>
      <Outlet/>
    </main>
  </div>

</div>
      </>
  )
}
export default Layout;