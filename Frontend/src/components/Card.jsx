import React from 'react'
import {CardContainer,InnerCard} from '../CommonCss/commoncss';
import { X } from 'lucide-react';


 const Card = ({ onClose, children }) => {
  return (
    <>
    
   <CardContainer className="shadow-lg">
   
                    <button onClick={onClose} className=' text-white  justify-end flex mb-2   transition-colors duration-300'>
                     <X />
                    </button>
               <InnerCard>
              {children}
            </InnerCard>


   </CardContainer>
    </>
  )
}
export default Card;