import React from 'react'
import { NotepadText,LaptopMinimalCheck ,File ,Clock3,UserRoundPen,Menu} from 'lucide-react';
import { colors,ContainerText ,NavItem,NavContainer} from '../CommonCss/commoncss';
import { Link } from 'react-router-dom';
import{useState} from 'react'
import useToggleNav from '../Store/ToggleNav'

 const Navbar = () => {
  const { isToggleNav, toggleNav } =  useToggleNav()


   
  return (

    <>
<NavContainer  $isOpen={isToggleNav}>      
  
   <NavItem>
      
  <Menu size={20} className='block md:hidden ' onClick={toggleNav}/>
  <h1 className='hidden md:block uppercase' onClick={toggleNav} style={{color:colors.background}}>Tools</h1>  
 </NavItem>
 
   < div className='gap-4 flex flex-col '>
        <Link to="/BriefAnalyzer">
        <NavItem>
       <Clock3 size={20} style={{color:colors.Menu}} strokeWidth={2.5}/>
        <span   className={isToggleNav ? "block" : "hidden md:block"}>Brief Analyzer </span >
        </NavItem>
        </Link>
        <Link to="/proposalWriter">
        < NavItem>
       <NotepadText size={20}  style={{color:colors.Menu}} strokeWidth={2.5}/>
        <span  className={isToggleNav ? "block" : "hidden md:block"}>Proposal Writer</span>
        </NavItem>
        </Link>
        <Link to="/InvoiceGenerator">
        < NavItem>
       <File size={20}  style={{color:colors.Menu}} strokeWidth={2.5}/>
        <span className={isToggleNav ? "block" : "hidden md:block"}>Invoice Generator</span>
        </NavItem>
        </Link>
        <Link to="/FollowUpWriter">
        < NavItem>
       <LaptopMinimalCheck size={20}  style={{color:colors.Menu}} strokeWidth={2.5}/>
        <span  className={isToggleNav ? "block" : "hidden md:block"}>Follow-up Writer </span>
        </NavItem>
        </Link>
        <Link to="/BioWriter">
        < NavItem>
        <UserRoundPen size={20}  style={{color:colors.Menu}} strokeWidth={2.5}/>
        <span className={isToggleNav ? "block" : "hidden md:block"}>Bio Writer </span>
        </NavItem>
        </Link>

    </div>
      
    </NavContainer>
    

    </>
  )
}
export default Navbar;