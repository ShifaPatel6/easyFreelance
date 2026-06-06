import React from 'react'
import InputCompo from '../Common/InputCompo';
import { CirclePlus } from 'lucide-react';

export const WorkedItem = () => {
    const [description, setDescription] = React.useState('');
  return (
    <>
   
    <div className='flex justify-around items-center gap-3'>
      
        <InputCompo label="Description" placeholder="Enter description" type="text" value={description} className="w-full h-10 rounded-md p-3"  onChange={(e) => setDescription(e.target.value)}
 />
                <InputCompo label="Quantity" placeholder="Enter quantity" type="number" value="" className="w-full h-10 rounded-md p-3" />

        <InputCompo label="Rate" placeholder="Enter rate" type="number" value="" className="w-full h-10 rounded-md p-3" />
                <InputCompo label="Amount" placeholder="Amount" type="number" value="" className="w-full h-10 rounded-md p-3" />
            


    </div>
    <div className="flex items-center gap-1  cursor-pointer">
      <CirclePlus size={16} />
      <span>Add Item</span>
    </div>
    </>
  )
}
