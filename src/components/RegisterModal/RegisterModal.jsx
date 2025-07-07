import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormAndValidation } from "../../utils/useFormAndValidation";

function RegisterModal({ isOpen, onClose, onSubmit, onLoginClick, isLoading }) {
  const {
    values,
    errors,
    handleChange,
    setErrors,
    setIsValid,
    isValid,
    resetForm,
  } = useFormAndValidation({
    email: "",
    password: "",
    username: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(values);
    resetForm();
  };

  return (
    <ModalWithForm
      title="Sign Up"
      name="register"
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
          value={values.email}
          onChange={handleChange}
          placeholder="Enter your email"
          maxLength="30"
          required
        />
      </label>

      <label className="modal__label">
        Password
        <input
          className="modal__input"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          placeholder="Enter your password"
          maxLength="30"
          required
        />
      </label>

      <label className="modal__label">
        Username
        <input
          className="modal__input"
          type="name"
          name="username"
          value={values.username}
          onChange={handleChange}
          placeholder="Enter your username"
          maxLength="30"
          required
        />
      </label>
      <div className="modal__button-container">
        <button type="submit" className="modal__add-button">
          {isLoading ? "Registering..." : "Sign Up"}
        </button>
        <button
          type="button"
          onClick={onLoginClick}
          className="modal__switch-button"
        >
          <span className="modal__switch-or">or</span>{" "}
          <span className="modal__switch-highlight">Sign In</span>
        </button>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
