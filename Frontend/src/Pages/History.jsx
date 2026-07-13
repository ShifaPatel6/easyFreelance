import React from 'react'
import { Heading ,OuterContainer,HeadingSubHeading} from '../CommonCss/commoncss'
import Table from '../components/Table'
import { useState,useCallback } from 'react';
import Card from '../components/Card';
    import { getToken } from '../Helper/tokenHelper';
import { useEffect } from 'react';
import useLoading from '../Hooks/LoadingHook';

export const History = () => {
  const[selecetedRow,setSelectedRow] = useState(null);
  const [openModal,setOpenModal] = useState(false);
  const [result,setResult] = useState([]);
  const[error,setError] = useState(null);
  const { startLoading, stopLoading } = useLoading()  

  const handleViewModal = useCallback((row) => {
    console.log("row selected" ,row)
    setSelectedRow(row);
    console.log("selected row ", row);
    
    setOpenModal(true);
  }, []);

  useEffect(() => {

    const fetchhistory = async () => {
     startLoading()
         try{
             const response = await getToken({
               url: 'http://localhost:5000/briefAnalyzer/history',
               options: {
                 method: "GET",
                 headers: { 'Content-Type': 'application/json' },
               }
             })

             if (!response.ok) {
           const errData = await response.json()
           throw new Error(errData.message || "Something went wrong")
           }
             const data = await response.json()
             setResult(data.data)
             console.log(data,"data");
             
             
         }catch {
       setError("An error occurred while fetching history. Please try again later.")
       setTimeout(() => setError(null), 6000)
       stopLoading()
     }
       }
fetchhistory()
  },[])

  return (
    <>
    <OuterContainer>
      <HeadingSubHeading>
      <Heading>
     History
    </Heading>
    <h1>Recent Analysis</h1>

      </HeadingSubHeading>
      
  <Table viewDes={true} onViewModal={handleViewModal} rows={result} ></Table>
  {
    openModal && 
   
   <Card onClose={() => setOpenModal(false)}>
  {selecetedRow && (
    <div className='flex flex-col gap-4'>

      {/* Input */}
      <div>
        <span className='text-lg font-bold'>Your Prompt</span>
        <hr className='my-2'/>
        <p>{selecetedRow.input_text}</p>
      </div>

      {/* What Client Wants */}
      <div>
        <span className='font-semibold'>What Client Wants</span>
        <hr className='my-2'/>
        <p>{selecetedRow.ai_output.what_client_want}</p>
      </div>

      {/* Missing Info */}
      <div>
        <span className='font-semibold'>Missing Information</span>
        <hr className='my-2'/>
        <p>{selecetedRow.ai_output.missing_info}</p>
      </div>

      {/* Deliverables */}
      <div>
        <span className='font-semibold'>Deliverables</span>
        <hr className='my-2'/>
        <p>{selecetedRow.ai_output.deliverables}</p>
      </div>

      {/* Questions */}
      <div>
        <span className='font-semibold'>Questions to Ask</span>
        <hr className='my-2'/>
        <p>{selecetedRow.ai_output["questions to ask client"]}</p>
      </div>

      {/* Complexity + Price */}
      <div className='flex justify-between'>
        <div>
          <span className='font-semibold'>Complexity</span>
          <p>{selecetedRow.ai_output["Project Complexity"]}</p>
        </div>
        <div>
          <span className='font-semibold'>Price Range</span>
          <p>{selecetedRow.ai_output.price_range}</p>
        </div>
      </div>

      {/* Date */}
      <div className='text-xs text-gray-400'>
        {new Date(selecetedRow.created_at).toLocaleDateString('en-IN')}
      </div>

    </div>
  )}
</Card>
  }
    </OuterContainer>
    </>
  )
}
