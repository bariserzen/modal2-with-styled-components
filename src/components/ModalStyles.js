import styled from 'styled-components';



 /* Modal */
    export const Overlay = styled.div `
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    width: 100%;
    height: 100%;`;
    
  
  
    export const ModalContainer = styled.div `
    max-width: 600px;
    width: 100%;
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    background-color: #ffffff;
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
    border-radius: 18px;
    
    & img {
    width: 280px;
    object-fit: cover;
    border-top-left-radius: 18px;
    border-bottom-left-radius: 18px;

    @media screen and (max-width: 500px) {
      width: 100%;
      object-fit: cover;
      border-top-right-radius: 18px;
      border-bottom-left-radius: 0px;
    }}

    @media screen and (max-width: 500px) {
      flex-direction: column;
      width: 90%;
      border-radius: 18px;
      max-width: 300px;
    }

    `;

    export const ModalRight = styled.div `
    width: 100%; `;
    

    export const CloseBtn = styled.div `
    position: fixed;
    top: 8px;
    right: 10px;
    cursor: pointer;
    font-size: 25px;
  

    &:hover {
    border-radius: 12px;
    font-size: 27px;
    }

    @media screen and (max-width: 500px) {
      background-color: white;
      border-radius: 30px;
    }
    `;

    export const Content = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 2rem;
    padding: 1rem 2rem;
    `;

    export const BtnContainer = styled.div `
    display: flex;
    padding: 1rem 1rem;

    & button {
    width: 100%;
    margin: .5rem;
    padding: 16px 0;
    border: 1px solid #411b57;
    cursor: pointer;
    border-radius: 8px;
    }
    `;

    export const BtnPrimary = styled.button `
    background-color: #411b57;
    color: white;
    `; 
  
    export const BtnOutline = styled.button `
    background-color: white;
    color: #411b57;
    `;
  
    export const Bold = styled.span `
    font-weight: 600;
    `;


