import React from 'react'
import { NotepadText,LaptopMinimalCheck ,File ,Clock3,UserRoundPen} from 'lucide-react';
import { colors } from '../CommonCss/commoncss';
import { Link } from 'react-router-dom';





 const Navbar = () => {
  return (
    <>
    <div className='tools  w-56 min-h-screen  overflow-hidden bg-slate-100 md:shadow-lg'>
      
    <h1 className='p-3' >Tools</h1>
        < div className='items-center gap-4 flex flex-col '>
        < div className='flex items-center gap-2 p-3 hover:bg-slate-200 w-full'>
       <Clock3 size={20} />
        <h1 style={{color:colors.primary}}><Link to="/BriefAnalyzer">Brief Analyzer</Link> </h1>
        </div>
        < div className='flex items-center gap-2 p-3 hover:bg-slate-200 w-full'>
       <NotepadText size={20} />
        <h1 style={{color:colors.primary}}><Link to="/proposalWriter">Proposal Writer</Link> </h1>
        </div>
        < div className='flex items-center gap-2 p-3 hover:bg-slate-200  w-full'>
       <File size={20} />
        <h1 style={{color:colors.primary}}><Link to="/InvoiceGenerator">Invoice Generator</Link> </h1>
        </div>
        < div className='flex items-center gap-2 p-3 hover:bg-slate-200  w-full'>
       <LaptopMinimalCheck size={20} />
        <h1 style={{color:colors.primary}}><Link to="/FollowUpWriter">Follow-up Writer</Link> </h1>
        </div>
        < div className='flex items-center gap-2 p-3 hover:bg-slate-200  w-full'>
       <UserRoundPen size={20} />
        <h1 style={{color:colors.primary}}><Link to="/BioWriter">Bio Writer</Link> </h1>
        </div>

    </div>
      
    </div>
    

    </>
  )
}
export default Navbar;