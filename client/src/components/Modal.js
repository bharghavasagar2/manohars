import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui active modal">
        <div className="header">DeleteStream</div>
        <div className="content">
          <p>Are you sure u want to delete?</p>
        </div>
        <div className="actions">
          <div className="ui  button primary ">Cancel</div>
          <div className="ui button negative">Delete</div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
