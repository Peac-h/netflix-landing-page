import React, { useEffect, useState } from "react";
import { SVGs } from "./SVGs";
import { useTranslation } from "react-i18next";
import "./InputField.scss";

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export function InputField({
  name,
  label,
  type = "text",
  minLength = 5,
  maxLength = 50,
  autoComplete,
  className = "",
  error,
  setError,
  value,
  onChange,
  required,
  inputRef,
}: {
  name: string;
  label: string;
  type?: string;
  minLength?: number;
  maxLength?: number;
  autoComplete?: string;
  className?: string;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  onChange: (value: string) => void;
  required: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    if (!isFocused && value !== "" && !validateEmail(value)) {
      setError(t("form.emailError"));
    }
    if (validateEmail(value) && error) {
      setIsValid(true);
      setError("");
    }
    if (!isFocused && value !== "" && validateEmail(value)) {
      setIsValid(true);
    }
  }, [isFocused, value, error, setError, t]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div
      className={`input-field-container ${className} ${
        error ? "input-field-error" : ""
      } ${isValid ? "input-field-valid" : ""}`}
    >
      <label
        htmlFor={`${name}Input`}
        className="input-field-label"
        style={isFocused || value ? { top: ".8rem", fontSize: "1.2rem" } : {}}
      >
        {label}
      </label>
      <div className="input-field-elements">
        <input
          autoComplete={autoComplete || name}
          minLength={minLength}
          maxLength={maxLength}
          type={type}
          name={name}
          id={`${name}Input`}
          value={value}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="input-field-element"
          required={required}
          ref={inputRef}
        />
        {error && (
          <span id={`${name}Error`} className="input-field-error-text">
            <SVGs name="reject" /> {error}
          </span>
        )}
      </div>
    </div>
  );
}
