import { useState, useCallback } from "react";

export function useFormAndValidation(inputValues = {}) {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setIsValid(e.target.closest(".modal__form").checkValidity());
  }, []);

  const resetForm = () => {
    setValues(inputValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    handleChange,
    errors,
    isValid,
    resetForm,
    setIsValid,
    setErrors,
  };
}
