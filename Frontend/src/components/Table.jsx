import React from 'react'
import { useState } from 'react';
import {TableContainer} from '../CommonCss/commoncss';
import { Eye } from 'lucide-react';

const Table = () => {
    const [data, setData] = useState([]);
    
const columns =['Date','Client Message','AI Analysis'];
const rows = [
    {
        Date:'2024-06-01',
        ClientMessage:'I need a logo for my new startup',
        AIAnalysis:'The client is looking for a logo design for their new startup company.'
    },  
]

  return (
    <>
    <TableContainer className="table-auto">
        <thead>
            <tr>
                {columns.map((column ,columnId)=>(
                    <th key={columnId}>{column}</th>
                    ))}
            </tr>
            </thead>
               <tbody>
        {rows.map((row, rowId) => (
            <tr key={rowId}>
            <td className='border p-3'>{row.Date}</td>
            <td className='border p-3'>{row.ClientMessage.substring(0, 45)}....</td>
            
            <td className='border p-3 flex  justify-between'>{row.AIAnalysis.substring(0, 80)}....
                 <div className=''>
                    view
                 </div>
            </td>
        
            </tr>
        ))}
        </tbody>
        </TableContainer>
  
    </>
  )
}
export default Table;
