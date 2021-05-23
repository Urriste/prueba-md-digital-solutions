import React from "react";
import "./r3.css";
import ReactDom from "react-dom";

const Modal = ({ children }) => {
  return ReactDom.createPortal(
    <div className="modal-container">
      {" "}
      <div className="modal">{children}</div>
    </div>,

    //lo que hacemos es que el react Portal se renderice aparte del Root de la web.
    //Este elemento con id "portal" se puede encontrar en el archivo index.html de la carpeta public
    document.getElementById("portal")
  );
};

export default Modal;
