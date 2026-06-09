import React from 'react'
import InputCompo from '../Common/InputCompo';
import {memo} from 'react';

 const Workeditem = memo(({item , onItemChange}) => {
  return (
<div className='flex justify-around items-center gap-3' key={item.id}>

         <InputCompo  placeholder="Enter description" type="text" value={item.description} className="w-full h-10 rounded-md p-3"  onChange={(e) => onItemChange(item.id, 'description', e.target.value)}/>
          <InputCompo  placeholder="Enter quantity" type="text" value={item.quantity} className="w-full h-10 rounded-md p-3"  onChange={(e) => onItemChange(item.id, 'quantity', e.target.value)}/>
          <InputCompo  placeholder="Enter rate" type="number" value={item.rate} className="w-full h-10 rounded-md p-3"  onChange={(e) => onItemChange(item.id, 'rate', e.target.value)}/>
          <InputCompo  placeholder="Amount" type="text" value={item.amount} className="w-full h-10 rounded-md p-3"  onChange={(e) => onItemChange(item.id, 'amount', e.target.value)}/>
    </div>  
    )
})
export default Workeditem;