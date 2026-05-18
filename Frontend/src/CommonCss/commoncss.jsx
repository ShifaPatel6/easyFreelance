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