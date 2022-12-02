import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import {CanvasC } from "./style.js";
import "./canvas.css";
import { Action } from "../buttons/Action.js";

export default function EditCanvas({ component, componentTitle }) {
  function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow((prev) => !prev);

    return (
      <CanvasC>
        <Action onClick={() => handleShow()}>
          <Action.Edit />
        </Action>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{componentTitle}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {component}
          </Offcanvas.Body>
        </Offcanvas>
      </CanvasC>
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
