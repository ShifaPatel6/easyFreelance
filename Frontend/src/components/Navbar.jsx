import React from 'react'
import { NotepadText,LaptopMinimalCheck ,File ,Clock3,UserRoundPen,Menu} from 'lucide-react';
import { colors,ContainerText ,NavItem} from '../CommonCss/commoncss';
import { Link } from 'react-router-dom';
import{useState} from 'react'
import useToggleNav from '../Store/ToggleNav'

 const Navbar = () => {
  const { isToggleNav, toggleNav } =  useToggleNav()


   
  return (

    <>
<div className={`tools min-h-screen overflow-hidden bg-slate-100 md:shadow-lg  md:w-56 ${isToggleNav ? "w-56 absolute md:relative z-50" :"w-12" }`}>      
  
   <NavItem>
      
  <Menu size={20} className='block md:hidden ' onClick={toggleNav}/>
  <ContainerText className='hidden md:block' onClick={toggleNav}>Tools</ContainerText>  
 </NavItem>
     
  
   < div className='gap-4 flex flex-col '>
        <Link to="/BriefAnalyzer">
        <NavItem>
       <Clock3 size={20} />
        <span  style={{color:colors.primary}} className={isToggleNav ? "block" : "hidden md:block"}>Brief Analyzer </span >
        </NavItem>
        </Link>
        <Link to="/proposalWriter">
        < NavItem>
       <NotepadText size={20} />
        <span style={{color:colors.primary}} className={isToggleNav ? "block" : "hidden md:block"}>Proposal Writer</span>
        </NavItem>
        </Link>
        <Link to="/InvoiceGenerator">
        < NavItem>
       <File size={20} />
        <span style={{color:colors.primary}}className={isToggleNav ? "block" : "hidden md:block"}>Invoice Generator</span>
        </NavItem>
        </Link>
        <Link to="/FollowUpWriter">
        < NavItem>
       <LaptopMinimalCheck size={20} />
        <span style={{color:colors.primary}} className={isToggleNav ? "block" : "hidden md:block"}>Follow-up Writer </span>
        </NavItem>
        </Link>
        <Link to="/BioWriter">
        < NavItem>
        <UserRoundPen size={20} />
        <span style={{color:colors.primary}}className={isToggleNav ? "block" : "hidden md:block"}>Bio Writer </span>
        </NavItem>
        </Link>

    </div>
      
    </div>
    

    </>
  )
}
export default Navbar;