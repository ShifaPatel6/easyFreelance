import { NotepadText,LaptopMinimalCheck ,File ,Clock3,UserRoundPen,Menu} from 'lucide-react';
import { colors,NavItem,NavContainer} from '../CommonCss/commoncss';
import { Link } from 'react-router-dom';
import useToggleNav from '../Store/ToggleNav'

 const Navbar = () => {
  const { isToggleNav, toggleNav } =  useToggleNav()
  return (

    <>
   <div className='flex'>
      
  <Menu size={20} className='block md:hidden fixed left-4 top-16 z-50'  onClick={toggleNav}/>
 </div>
<NavContainer  $isOpen={isToggleNav}>      
  
   <h1 className='hidden md:block uppercase p-3' onClick={toggleNav} style={{color:colors.background}}>Tools</h1>  

   < div className='gap-4 flex flex-col '>
        <Link to="/BriefAnalyzer">
        <NavItem>
       <Clock3 size={20} style={{color:colors.Menu}} strokeWidth={2.5}/>
<span className={isToggleNav ? "block" : "hidden md:block"}>Brief Analyzer</span>
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