import "./ModalWithForm.css";

function ModalWithForm({ children, isOpen, title, onClose }) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__container modal__container_login">
        <h2 className="modal__title">{title}</h2>
        <button className="modal__close" type="button" onClick={onClose} />
        <form className="modal__form">{children}</form>
      </div>
    </div>
  );
}

export default ModalWithForm;
