import React from "react";
import Modal from "react-modal";
import SearchBar from "./searchBar";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function SearchModal({ isOpen, setIsOpen, data }) {
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="modal-container">
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            border: "none",
            overflow: "initial",
            backgroundColor: "transparent",
          },
        }}
        contentLabel="Example Modal"
      >
        <SearchBar placeholder="Enter a Book Name..." data={data} />
      </Modal>
    </div>
  );
}

export default SearchModal;
