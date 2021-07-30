import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export default function Modal(props) {
  const portalName = document.getElementById("overlays");
  return (
    <Fragment>
      {createPortal(<Backdrop onClose={props.onClose} />, portalName)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalName)}
    </Fragment>
  );
}
