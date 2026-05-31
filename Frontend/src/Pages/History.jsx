import React from 'react'
import { Heading ,OuterContainer,HeadingSubHeading ,CardContainer ,InnerCard} from '../CommonCss/commoncss'
import Table from '../components/Table'
import { useState } from 'react';
import Card from '../components/Card';

export const History = () => {
  const[selecetedRow,setSelectedRow] = useState(null);
  const [openModal,setOpenModal] = useState(false);

  const handleViewModal = (row) => {
    setSelectedRow(row);
    setOpenModal(true);
  }

  return (
    <>
    <OuterContainer>
      <HeadingSubHeading>
      <Heading>
     History
    </Heading>
    <h1>Recent Analysis</h1>

      </HeadingSubHeading>
      
  <Table viewDes={true} onViewModal={handleViewModal} ></Table>
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
