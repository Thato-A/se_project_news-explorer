import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormAndValidation } from "../../utils/useFormAndValidation";

function LoginModal({ isOpen, onClose, onSubmit, onRegisterClick, isLoading }) {
  const { values, errors, handleChange, isValid, resetForm } =
    useFormAndValidation({ email: "", password: "" });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(values)
      .then(() => {
        resetForm();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <ModalWithForm
      title="Sign In"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Email
        <input
          className="modal__input"
          type="email"
          name="email"
          placeholder="Email"
          maxLength="30"
          required
          value={values.email}
          onChange={handleChange}
        />
      </label>

      <label className="modal__label">
        Password
        <input
          className="modal__input"
          type="password"
          name="password"
          placeholder="Password"
          minLength="8"
          maxLength="30"
          value={values.password}
          onChange={handleChange}
          required
        />
      </label>
      <div className="modal__button-container">
        <button
          type="submit"
          className={`modal__add-button ${
            !isValid ? "modal__add-button_disabled" : ""
          }`}
          disabled={!isValid}
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </button>
        <button
          type="button"
          onClick={onRegisterClick}
          className="modal__switch-button"
        >
          or Sign Up
        </button>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
