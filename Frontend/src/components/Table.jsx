import React from 'react'
import { useState } from 'react';
import {TableContainer} from '../CommonCss/commoncss';
import { Eye } from 'lucide-react';
import { colors } from '../CommonCss/commoncss';
import { Pagination } from './Pagination';

const Table = ({viewDes = false , onViewModal}) => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);


    
const columns =['Date','Client Message','AI Analysis'];
const rows = [

    {
       
        Date:'2024-06-01',
        ClientMessage:'I need a logo for my new startup',
        AIAnalysis:'The client is looking for a logo design for their new startup company.i habe build the featutehfuehfuhieuhguhhguihehughehehguehg  actally mujhe closeing button to har modal me chahiye to me ye kar rahi thi ke mera jo actual card component me hai usme directly button add karu instaed of adding it in every page where my odal is used mujhe same jaga par modal open karwana hai i mean jo mera table hai uske upar hi kyuke me open karrhi hu to niche show horaha ha bus css property me kya use kar sakti hu wo bata do ab modal open karne ke liye kaise handle karege condition like setOpen wagera kaha defined karu in table or where iam using Modal PageA ne Table ko ek phone number diya (onView). Jab bhi user kisi row ke view button pe click karega to wo phone number Table se PageA me onView function ke through bhej dega. PageA me ek state variable hoga (selectedPhone) jisme wo phone number store karega. Jab selectedPhone update hoga to PageA me useEffect hook chalega jo check karega ki selectedPhone me koi value hai ya nahi. Agar value hai to wo modal open kar dega aur usme selectedPhone ka data show karega. Agar value nahi hai to modal close kar dega. Is tarah se aap ek hi jagah par modal open karwa sakte hain aur har row ke liye alag alag data show karwa sakte hain. Aapko bas ye ensure karna hai ki onView function me sahi data pass ho raha hai aur PageA me useEffect hook sahi tarah se set up hai. Agar aapko koi specific code snippet chahiye to please bataiye, main aapko usme madad kar sakta hu. Aapko bas ye ensure karna hai ki onView function me sahi data pass ho raha hai aur PageA me useEffect hook sahi tarah se set up hai. Agar aapko koi specific code snippet chahiye to please bataiye, main aapko usme madad kar sakta hu. Aapko bas ye ensure karna hai ki onView function me sahi data pass ho raha hai. Aur PageA me useEffect hook sahi tarah se set up hai. Agar aapko koi specific code snippet chahiye to please bataiye, main aapko usme madad kar sakta hu. Aapko bas ye ensure karna hai ki onView function me sahi data pass ho raha hai aur PageA me useEffect hook sahi tarah se set up hai. Agar aapko koi specific code snippet chahiye to please bataiye, main aapko usme madad kar sakta hu. Aapko bas ye ensure karna hai ki onView function me sahi data pass ho raha hai aur PageA me useEffect hook sahi tarah se set up hai. Agar aapko koi specific code snippet chahiye to please bataiye, main aapko usme madad kar sakta hu. Aapko bas ye ensure karna hai ki onView function me sahi data pass ho raha hai aur PageA me useEffect hook sahi tarah se set up hai. Agar aapko koi specific code snippet chahiye to please bataiye, main aapko usme madad kar sakta hu. Aapko bas ye ensure karna hai ki onView function me sahi data pass ho raha hai aur PageA me useEffect hook sahi tarah se set up hai. Agar aapko koi specific code snippet chahiye to please bataiye, main aapko usme madad kar sakta hu. Aapko bas ye ensure karna hai ki onView function me sahi data pass ho raha hai aur PageA me useEffect hook sahi tarah se set up hai. Agar aapko koi specific code snippet chahiye to please bataiye, main aapko usme madad kar sakta hu. Aapko bas ye ensure karna hai ki onView function me sahi data pass ho raha hai aur PageA me useEffect hook sahi tarah se set up hai. Agar aapko koi specific code snippet chahiye to please bataiye, main aapko usme madad kar sakta hu. Aapko bas ye ensure karna hai ki onView function me sahi data pass ho raha hai aur PageA me useEffect hook sahi tarah se set up hai. Agar aapko koi specific code snippet chahiye to please bataiye, main aapko usme'

    }, 
     {
        Date:'2024-06-01',
        ClientMessage:'I need a logo for my new startup',
        AIAnalysis:'The client is looking for a logo design for their new startup company.'
    }, 
     {
        Date:'2024-06-01',
        ClientMessage:'I need a logo for my new startup',
        AIAnalysis:'The client is looking for a logo design for their new startup company.'
    },
     {
        Date:'2024-06-01',
        ClientMessage:'I need a logo for my new startup',
        AIAnalysis:'The client is looking for a .'
    },    
    {
        Date:'2024-06-01',
        ClientMessage:'I need a logo for my new startup',
        AIAnalysis:'The client is looking for a logo design for their new startup company.'
    }, 
     {
        Date:'2024-06-01',
        ClientMessage:'I need a logo for my new startup',
        AIAnalysis:'The client is looking for a logo design for their new startup company.'
    }, 
     {
        Date:'2024-06-01',
        ClientMessage:'I need a logo for my new startup',
        AIAnalysis:'The client is looking for a logo design for their new startup company.'
    },
     {
        Date:'2024-06-01',
        ClientMessage:'I need a logo for my new startup',
        AIAnalysis:'The client is looking for a logo design for their new startup company.'
    },  
    {
        Date:'2024-06-01',
        ClientMessage:'I need a logo for my new startup',
        AIAnalysis:'The client is looking for a logo design for their new startup company.'
    }, 
     {
        Date:'2024-06-01',
        ClientMessage:'I need a logo for my new startup',
        AIAnalysis:'The client is looking for a logo design for their new startup company.'
    }, 
     {
        Date:'2024-06-01',
        ClientMessage:'I need a logo for my new startup',
        AIAnalysis:'The client is looking for a logo design for their new startup company.'
    },  


]
const itemsPerPage = 4;
    const totalPages = Math.ceil(rows.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = rows.slice(startIndex , startIndex + itemsPerPage);

  return (
    <>
    <TableContainer className="table-auto mx-auto ">
        <thead>
            <tr>
                {columns.map((column ,columnId)=>(
                    <th key={columnId}>{column}</th>
                    ))}
            </tr>
            </thead>
               <tbody>
        {currentItems.map((row, rowId) => (
            <tr key={rowId}>
            <td className='border p-3'>{row.Date}</td>
            <td className='border p-3'>{row.ClientMessage.substring(0, 45)}....</td>
            
            <td className='border p-3 flex  justify-between'>{row.AIAnalysis.substring(0, 80)}....
              <span>{viewDes && <Eye style={{ cursor: 'pointer' }} onClick={() => onViewModal(row)}  />}</span>
            </td>
            </tr>
        ))}
        </tbody>
        </TableContainer>
        <div className='flex justify-center'>

       <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
  
    </>
  )
}
export default Table;
