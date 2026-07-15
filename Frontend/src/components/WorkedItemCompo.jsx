import { CirclePlus } from 'lucide-react';
import WorkedItem from './WorkedItem';
import useWorkedItemStore from'../Store/WorkedItemStore'
import {ContainerText} from "../CommonCss/commoncss"

 const WorkedItemCompo = ({showAddbtn = true ,isPreview = true}) => {
   
  const items = useWorkedItemStore((state)=>state.items)
  const updateItem = useWorkedItemStore((state)=>state.updateItem)
  const addItem = useWorkedItemStore((state)=>state.addItem)
  const getSubTotal = useWorkedItemStore((state) => state.getSubTotal)
  const getGst      = useWorkedItemStore((state) => state.getGst)
  const getTotal    = useWorkedItemStore((state) => state.getTotal)
    
  return (
    <>
    <div className='w-full flex flex-col gap-3 justify-center'>

  <div className=' grid grid-cols-4 text-center  gap-2'>
               <ContainerText> Description </ContainerText>
                   <ContainerText > Quantity </ContainerText>

                  <ContainerText > Rate </ContainerText>
               <ContainerText > Amount </ContainerText>

  </div>
 <div className={`w-full flex flex-col gap-3 justify-start ${items.length > 4 ? 'overflow-y-scroll h-56' : ''} `}>
   {   items.map((item) => (
    <WorkedItem key={item.id} item={item} onItemChange={updateItem} />

   ))}
   </div>
   {
    showAddbtn && 
    <div className="flex items-center gap-1  cursor-pointer" onClick={addItem}>
      <CirclePlus size={16} />
      <span>Add Item</span>
    </div>
 }
</div>

<div className="flex flex-col md:justify-between md:flex-row mt-4">  
  
<div className='text-black font-medium'>Subtotal :  ₹{getSubTotal().toLocaleString('en-IN')}</div>
<div className='text-black font-medium'>GST(18%) : ₹{getGst().toLocaleString('en-IN')}</div>
<div className='text-black font-medium'>{isPreview ? "Total" : "Total due" } : ₹{getTotal().toLocaleString('en-IN')}</div>
</div>
    </>
  )
}
export default WorkedItemCompo;