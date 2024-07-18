import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Backdrop = () => {
  return <div className="backdrop"></div>;
};
const Overlay = (props) => {
  return <div className={`overlay ${props.className}`}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay {...props} />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
