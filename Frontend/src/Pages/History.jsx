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
  const { isLoading, startLoading, stopLoading } = useLoading()  

  const handleViewModal = useCallback((row) => {
    setSelectedRow(row);
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
             
           
     
     
         }catch {
       setError("An error occurred while fetching history. Please try again later.")
       setTimeout(() => setError(null), 6000)
       stopLoading()
     }
       }
fetchhistory()
  },[result])

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
    {selecetedRow && <div>
  <div className='flex justify-between'>
    <h1>{selecetedRow.ClientMessage}  </h1>
      <span className='text-lg font-bold'>Your Prompt</span>
   
  </div>
  <hr />
  <p>{selecetedRow.AIAnalysis}</p>
  
    </div>}
   </Card>
  }
    </OuterContainer>
    </>
  )
}
