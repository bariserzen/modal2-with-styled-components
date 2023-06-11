import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
    
  }
`;


 export const ModalButton = styled.button `
   position: fixed;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    padding: 22px 44px;
    border-radius: 15px;
    background-color: #411b57;
    color: white;
    font-size: 20px;
    `;
  
  
 
  
  