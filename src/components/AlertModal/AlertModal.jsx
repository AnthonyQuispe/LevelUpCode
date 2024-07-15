import React from "react";
import PropTypes from "prop-types";
import "./AlertModal.scss";
import DeleteIcon from "../../assets/icons/DeleteIcon.svg";

export default function AlertModal({ isVisible, message, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="alert-modal">
      <p className="alert-modal__text">{message}</p>
      <button onClick={onClose} className="alert-modal__button">
        <img src={DeleteIcon} alt="close" className="alert-modal__button-img" />
      </button>
    </div>
  );
}

AlertModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
