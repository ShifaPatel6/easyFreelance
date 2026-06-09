import React from 'react'
import { CirclePlus } from 'lucide-react';
import Workeditem from './Workeditem';

 const WorkedItem = () => {
    const[items,setItems] = React.useState(
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

    const handleItemsChange=React.useCallback((id ,feild,value)=>{
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
    <div className="flex items-center gap-1  cursor-pointer" onClick={handleAddItem}>
      <CirclePlus size={16} />
      <span >Add Item</span>
    </div>
</div>
    </>
  )
}
export default WorkedItem;