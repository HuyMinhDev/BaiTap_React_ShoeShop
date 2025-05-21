import React from "react";

const Modal = ({ content, onClose }) => {
  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{content.name}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <img
              src={content.image}
              className="img-fluid mb-3"
              alt={content.name}
            />
            <p>
              <strong>Price:</strong> ${content.price}
            </p>
            <p>
              <strong>Description:</strong> {content.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
