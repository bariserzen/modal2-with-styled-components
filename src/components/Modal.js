import React from 'react';
import nft from './nft.jpg';
import { GrFormClose } from 'react-icons/gr';
import {
  Overlay,
  ModalContainer,
  ModalRight,
  CloseBtn,
  Content,
  BtnContainer,
  BtnPrimary,
  BtnOutline,
  Bold
} from './ModalStyles';



const Modal = ({ open, onClose }) => {

  if (!open) return null;

  return (
    <Overlay onClick={onClose}>

      <ModalContainer
           onClick={(e) => {e.stopPropagation(); }}>

        <img src={nft} alt='/' />

        <ModalRight>
        
        <CloseBtn onClick={onClose}>
          <GrFormClose/>
        </CloseBtn>

            <Content>
              <p>Do you want a</p>
              <h1>$20 CREDIT</h1>
              <p>for your first trade?</p>
            </Content>

            <BtnContainer>
              <BtnPrimary>
              <Bold className='bold'>YES</Bold>, I love NFT's
              </BtnPrimary>
              <BtnOutline>
              <Bold className='bold'>NO</Bold>, thanks
              </BtnOutline>
             </BtnContainer>
         </ModalRight>

      </ModalContainer>
    </Overlay>
  );
};

export default Modal;



