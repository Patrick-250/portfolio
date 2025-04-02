import React from "react";

const EliteSpaceDemoModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div id="elite-space-demo-modal" className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          x
        </button>
        <div className="modal-body">
          <video controls>
            <source
              src="https://drive.google.com/uc?export=download&id=1P3ZVYZTXRl1ZPiTJlgmxVShzRpoMmV-X"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default EliteSpaceDemoModal;
