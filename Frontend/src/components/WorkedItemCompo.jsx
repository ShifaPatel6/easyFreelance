import React from 'react'
import { CirclePlus } from 'lucide-react';
import Workeditem from './Workeditem';
import{useState, useCallback} from 'react';

 const WorkedItemCompo = ({showAddbtn = true ,isPreview = true}) => {
    const[items,setItems] = useState(
      Array(3).fill(null).map((_, i)=>{
        return {
          id: i + 1,
          description: '',
          quantity: '',
          rate: '',
          amount: ''
        };
      })
    );
    const handleItemsChange=useCallback((id ,feild,value)=>{
      setItems(prevItems => prevItems.map(i => i.id ===id ?{...i ,[feild]:value}: i))
    }, []);
    const handleAddItem =()=>{
      setItems(prevItems => [...prevItems,{
        id: prevItems.length + 1,
        description: '',
        quantity: '',
        rate: '',
        amount: ''
      }])
    }

    const subTotal = items.reduce((total ,items)=>{
     return total + (Number(items.amount))      
    },0)

    const gst = Math.floor(subTotal * 0.18)
    const Total = gst + subTotal;

    
  return (
    <>
    <div className='w-full flex flex-col gap-3 justify-center'>

  <div className='grid grid-cols-4 text-center justify-start gap-2'>
    <div>Description</div>
    <div>Quantity</div>
    <div>Rate</div>
    <div>Amount</div>
  </div>
 <div className={`w-full flex flex-col gap-3 justify-start ${items.length > 4 ? 'overflow-y-scroll h-56' : ''} `}>
   {   items.map((item) => (
    <Workeditem key={item.id} item={item} onItemChange={handleItemsChange} />

   ))}
 
   </div>
   {
    showAddbtn && 
    <div className="flex items-center gap-1  cursor-pointer" onClick={handleAddItem}>
      <CirclePlus size={16} />
      <span>Add Item</span>
    </div>
 }
</div>

<div className={isPreview ? "flex justify-between mt-2 items-center": "flex flex-col text-right mt-4"}>  
  
<div>Subtotal :  ₹{subTotal.toLocaleString('en-IN')}</div>
<div>GST(18%) : ₹{gst.toLocaleString('en-IN')}</div>
<div className={isPreview ? "" :"text-lg mt-2"}>{isPreview ? "Total" : "Total Due" } : ₹{Total.toLocaleString('en-IN')}</div>
</div>

    </>
  )
}
export default WorkedItemCompo;