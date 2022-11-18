import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {AddBtn} from '../buttons/AddBtn';
import AddNewProduct from '../Form/AddNewProduct';


export default function ProductAddCanvas({sendNewProduct}) {
  function OffCanvasExample({name, ...props }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
    return (
      <>
          <AddBtn onClick={handleShow}>
              <AddBtn.Plus/>
          </AddBtn>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Yangi maxsulot qo’shish</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
         <AddNewProduct sendNewProduct={sendNewProduct} />
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  return (
    <>
      {['end'].map((placement, idx) => (
        <OffCanvasExample  key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}