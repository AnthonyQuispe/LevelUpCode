import React from "react";
import PropTypes from "prop-types";
import "./AlertModal.scss";
import XIcon from "../../assets/icons/CloseIcon.png";

export default function AlertModal({ isVisible, message, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="alert-modal">
      <h3 className="alert-modal__text">{message}</h3>
      <button onClick={onClose} className="alert-modal__button">
        <img src={XIcon} alt="close" className="alert-modal__button-img" />
      </button>
    </div>
  );
}

AlertModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
