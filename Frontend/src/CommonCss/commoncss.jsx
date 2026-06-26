import styled from 'styled-components'

// src/styles/colors.js
export const colors = {
  primary: '#534AB7',
  primaryDark: '#3C3489',
  primaryLight: '#edf2f6',
  text: '#1a1a1a',
  textSecondary: '#C4BFFF',
  white: '#ffffff',
  black: '#000000',
  error: '#ef4444',
  success: '#22c55e',
  background:'#2C2347',
  lightBackground:'#C4B0FF ',
}

export const  StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 12px;
  padding: 12px;
  box-shadow:  0 10px 15px -3px rgba(0,0,0,0.1);
  border: 2px solid #d1d5db;
  
  
  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`
export const StyledTextArea = styled.input`
  width: 100%;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  border: 2px solid #d1d5db;
  
  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`


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
   ${({ $selected }) => $selected && `
    background: white;
    color: ${colors.background};
    border: 2px solid ${colors.background};
  `}

   &:hover {
    background: ${colors.lightBackground};
  }
 
  `
  export const Heading = styled.h1`
  font-size: 1.875rem;
     font-weight: 600;
  color: ${ colors.black};
  `
  export const SubHeading = styled.h2`
  font-size: 1.25rem;
     font-weight: 500;
  color: ${ colors.textSecondary};
  `

    export const ContainerText = styled.h1`
  font-size: 0.9rem;
     font-weight: 500;
     text-transform: uppercase;
  color: ${ colors.black};
  `
  export const OuterContainer = styled.div`
  background: linear-gradient(to right, #C4B0FF, #2C2347);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem;
  overflow:hidden;
  // min-height:100vh;
  `
 export const NavContainer = styled.div`
  min-height: 100vh;
  overflow: hidden;
  background-color: ${colors.background};
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  width: 48px;  /* default — closed */
  transition: right 0.4s   ease-in-out;

  @media (min-width: 768px) {
    width: 192px;  /* md:w-48 */
    position: relative;
    z-index: auto;
  }

  ${({ $isOpen }) => $isOpen && `
    width: 224px;  /* w-56 — open */
    position: absolute;
    z-index: 50;

    @media (min-width: 768px) {
      position: relative;
      z-index: auto;
    }
  `}
`
export const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  width: 100%;
  cursor: pointer;
  color:${colors.white};

  &:hover {
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  background-color:#665b86

  }

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
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
  // background: ${colors.primaryLight};
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
  font-size: 0.9rem;
     font-weight: 600;
     margin-bottom:0.5rem;
  color: ${ colors.black};
  `   