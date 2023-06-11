import React, { useState } from 'react';
import Modal from './components/Modal';
import { GlobalStyle, ModalButton } from './globalStyles';




const App = () => {


  const [openModal, setOpenModal] = useState(false);



  return (
    <div>
      <GlobalStyle />
      <ModalButton onClick={() => setOpenModal(true)}>
        Modal
      </ModalButton>

      <Modal open={openModal} 
             onClose={() => setOpenModal(false)}/>
             
      </div>
  );
}

export default App;
