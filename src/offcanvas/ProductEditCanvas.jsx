import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {ProductAddCanvasC} from './style.js'
import './canvas.css'
import { Action } from '../buttons/Action.js';

export default function ProductEditCanvas({editProduct ,component, componentTitle}) {
  function OffCanvasExample({name, ...props }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
    return (
      <ProductAddCanvasC>
           <Action onClick={() => {handleShow() ; editProduct()}}>
             <Action.Edit/>
           </Action>
        <Offcanvas  show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{componentTitle}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
         {/* <AddNewProduct sendNewProduct={sendNewProduct} /> */}
         {component}
          </Offcanvas.Body>
        </Offcanvas>
      </ProductAddCanvasC>
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