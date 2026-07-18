import React from 'react'
import { useState } from 'react';
import {TableContainer} from '../CommonCss/commoncss';
import { Eye } from 'lucide-react';
import { Pagination } from './Pagination';

const  Table = ({viewDes = false , onViewModal,rows}) => {
    const [currentPage, setCurrentPage] = useState(1);


const columns =['Date','Client Message','AI Analysis'];

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
      
      {/* Date */}
      <td className='border p-3'>
        {new Date(row.created_at).toLocaleDateString('en-IN')}
      </td>

      {/* Client Message */}
      <td className='border p-3'>
        {row.input_text}....
      </td>

      {/* AI Analysis — object nahi, string field */}
      <td className='border p-3 flex justify-between'>
        {row.ai_output.what_client_want}....
        <span>
          {viewDes && 
            <Eye 
              style={{ cursor: 'pointer' }} 
              onClick={() => onViewModal(row)} 
            />
          }
        </span>
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
export default React.memo(Table);
