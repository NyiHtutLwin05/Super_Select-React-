import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const CustomModal = ({ isOpen, onRequestClose, selectedImage }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={{
      overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.09)",
      },
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        maxWidth: "80%",
        maxHeight: "80%",
      },
    }}>
      <img src={selectedImage} alt="Selected" className=" md:w-550"/>
    </Modal>
  );
};

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  selectedImage: PropTypes.string.isRequired,
};

export default CustomModal;