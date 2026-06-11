import styled from 'styled-components'

// src/styles/colors.js
export const colors = {
  primary: '#534AB7',
  primaryDark: '#3C3489',
  primaryLight: '#EEEDFE',
  text: '#1a1a1a',
  textSecondary: '#666',
  white: '#ffffff',
  black: '#000000',
  error: '#ef4444',
  success: '#22c55e',
  background:'#534AB7',
  lightBackground:'#9a93e3 ',
}

export const RegularButton = styled.button`
  background: ${colors.background};
  color:white;
  border-radius:9999px;
 border: 1px solid #e2e8f0;
    padding-left: 1.5rem;
    padding-right: 1.5rem ;

  transition: background-color 0.3s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: ${colors.lightBackground};
  }

   &:hover {
    background: ${colors.lightBackground};
  }
 
  `
  export const Heading = styled.h1`
  font-size: 1.875rem;
     font-weight: 600;
  color: ${ colors.textSecondary};
  `
  export const SubHeading = styled.h2`
  font-size: 1.25rem;
     font-weight: 500;
  color: ${ colors.textSecondary};
  `
  export const OuterContainer = styled.div`
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem;
  `

  export const HeadingSubHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  `

  export const TableContainer = styled.table`
  width: 91.66%;
    

  th, td {
    padding: 0.75rem;
    text-align: left;
   
  }
  th {
    background-color: ${colors.primaryLight};
  }
    tbody tr:nth-child(even) {
    // background-color: ${colors.primaryLight};
    width:100%;
  }
  `

  export const CardContainer = styled.div`
  background: ${colors.primaryLight};
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  width: 80%;
  margin: 0 auto;
  max-height: 80vh;
  border-radius: 0.5rem;
  justify-content: center;
z-index: 1000; 
position: fixed;
  `
  export const InnerCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 24px;
  width: 100%;
  max-height: 60vh;
    overflow-y: auto; 
  `
  export const InputTag = styled.h1`
  font-size: 0.80rem;
     font-weight: 500;
  color: ${ colors.textSecondary};
  ` 