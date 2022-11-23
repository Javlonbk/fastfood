import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { ProductAddCanvasC } from "./style.js";
import "./canvas.css";
import { Action } from "../buttons/Action.js";

export default function ProductEditCanvas({ component, componentTitle }) {
  function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow((prev) => !prev);

    return (
      <ProductAddCanvasC>
        <Action onClick={() => handleShow()}>
          <Action.Edit />
        </Action>
        <Offcanvas show={show} onHide={handleClose} {...props}>
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
      {["end"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}
