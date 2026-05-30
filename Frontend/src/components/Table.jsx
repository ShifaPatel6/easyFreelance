import React from 'react'
import { useState } from 'react';
import {TableContainer} from '../CommonCss/commoncss';
import { Eye } from 'lucide-react';
import { colors } from '../CommonCss/commoncss';
import { Pagination } from './Pagination';

const Table = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    
const columns =['Date','Client Message','AI Analysis'];
const rows = [
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
