import "./ModalWithForm.css";

function ModalWithForm({ children, isOpen, title, onClose, onSubmit, name }) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className={`modal__container modal__container_${name}`}>
        <h2 className="modal__title">{title}</h2>
        <button className="modal__close" type="button" onClick={onClose}>
          {" "}
        </button>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
