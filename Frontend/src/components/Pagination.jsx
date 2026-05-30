import React from 'react'
import {RegularButton} from '../CommonCss/commoncss';
import { colors } from '../CommonCss/commoncss';
import { useState } from 'react';
import { ArrowRight,ArrowLeft } from 'lucide-react';


export const Pagination = ({ currentPage, totalPages, onPageChange }) => {

    const handlePrevious = () => {
        if(currentPage > 1){
           onPageChange(currentPage - 1);
        }
    };
    const handleNext = () => {
        if(currentPage < totalPages){
            onPageChange(currentPage + 1);
        }
    };  
    

  return (
    <div>
        <div className='flex gap-6 items-center'>
            <RegularButton disabled={currentPage === 1} onClick={handlePrevious}
                className ='px-3 py-2  max-w-14'>
                               <ArrowLeft size={18} />

            </RegularButton>
            <div>
                <span className='text-gray-500'> {currentPage} of {totalPages}</span>
            </div>
             <RegularButton disabled={currentPage === totalPages} onClick={handleNext}
                className ='px-3 py-2  max-w-14'>
               <ArrowRight size={18} />
                {console.log(currentPage , totalPages)
                }
            </RegularButton>
        </div>

    </div>
  )
}
