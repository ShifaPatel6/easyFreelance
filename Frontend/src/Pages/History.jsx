import React from 'react'
import { Heading ,OuterContainer,HeadingSubHeading } from '../CommonCss/commoncss'
import Table from '../components/Table'

export const History = () => {
  return (
    <>
    <OuterContainer>
      <HeadingSubHeading>
      <Heading>
     History
    </Heading>
    <h1>Recent Analysis</h1>
      </HeadingSubHeading>
<Table></Table>
    </OuterContainer>
    </>
  )
}
