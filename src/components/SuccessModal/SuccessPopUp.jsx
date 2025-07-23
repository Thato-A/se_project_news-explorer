import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SuccessPopUp({ isOpen, onClose, onLoginClick }) {
  return (
    <ModalWithForm
      title="Registration successfully completed!"
      name="success"
      onClose={onClose}
      isOpen={isOpen}
    >
      <button
        type="button"
        onClick={onLoginClick}
        className="modal__switch-button"
      >
        Sign In
      </button>
    </ModalWithForm>
  );
}

export default SuccessPopUp;
