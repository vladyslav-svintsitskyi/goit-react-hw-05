import React, { useEffect } from "react";
import Modal from "react-modal";
import { ImCross } from "react-icons/im";
import s from "./ImageModal.module.css";

const ImageModal = ({ isOpen, image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
      shouldCloseOnOverlayClick={true}
    >
      <div className={s.content}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={s.image}
        />
        <button onClick={onClose} className={s.closeButton}>
          <ImCross />
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;
