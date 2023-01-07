import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {AddBtn} from '../buttons/AddBtn';
import {CanvasC} from './style.js'
import './canvas.css'

export default function AddCanvas({component, componentTitle}) {
  function OffCanvasExample({name, ...props }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
    return (
      <>
          <AddBtn onClick={handleShow}>
              <AddBtn.Plus/>
          </AddBtn>
        <Offcanvas  show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{componentTitle}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
         {component}
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  return (
    <CanvasC>
      {['end'].map((placement, idx) => (
        <OffCanvasExample  key={idx} placement={placement} name={placement} />
      ))}
    </CanvasC>
  );
}