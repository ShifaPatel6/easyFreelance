import React from 'react'
import "../css/Layoutstyle.css"
import {Outlet} from "react-router-dom"
import Navbar from '../components/Navbar';
import MainHeader from '../components/mainHeader';
import useToggleNav from '../Store/ToggleNav'
import { colors } from '../CommonCss/commoncss';

 const Layout = () => {
    const { isToggleNav, toggleNav } =  useToggleNav()


  return (
    <>
  
<div className='flex flex-col w-full h-screen overflow-hidden'>
   <MainHeader/>
  {/* Sidebar left - fixed */}

  {/* Right side - header + content */}
  <div className=' flex flex-1 overflow-hidden'>
  <Navbar/>
   {isToggleNav && (
    <div 
      className='fixed inset-0 bg-black bg-opacity-20 z-20 md:hidden' 
      onClick={toggleNav}
    />
  )}

    <main className='flex-1 min-w-0 overflow-y-auto overflow-x-hidden '>
      <Outlet/>
    </main>
  </div>

</div>
      </>
  )
}
export default Layout;