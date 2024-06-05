import React, { useEffect, useState } from "react";
import { SVGs } from "./SVGs";
import "./InputField.scss";
import { useTranslation } from "react-i18next";

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
const validatePassword = (password: string) => {
  return password.length >= 4 && password.length <= 60;
};

export function InputField(props: {
  name: string;
  label: string;
  required: boolean;
  value: null | string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  type?: string;
  minLength?: number;
  maxLength?: number;
  autoComplete?: string;
  className?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (!props.value || isFocused) return;

    let valid = true;

    if (props.type === "email") {
      valid = validateEmail(props.value);
      setIsValid(valid);
      props.setError(valid ? null : t("form.emailError"));
    } else if (props.type === "password") {
      valid = validatePassword(props.value);
      setIsValid(valid);
      props.setError(valid ? null : t("form.passwordError"));
    }
  }, [props, isFocused, t]);

  return (
    <div className={`input-field-container ${props.className}`}>
      <label
        htmlFor={`${props.name}Input`}
        className={`input-field-label ${
          isFocused || props.value ? "is-focused" : ""
        }`}
      >
        {props.label}
      </label>
      <div
        className={`input-field-elements ${
          props.error ? "input-field-error" : ""
        } 
      ${isValid ? "input-field-valid" : ""}`}
      >
        <input
          autoComplete={props.autoComplete || props.name}
          minLength={props.minLength}
          maxLength={props.maxLength}
          type={props.type}
          name={props.name}
          id={`${props.name}Input`}
          value={props.value ?? ""}
          onChange={props.onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="input-field-element"
          required={props.required}
          ref={props.inputRef}
        />
      </div>
      {props.error && (
        <div id={`${props.name}Error`} className="input-field-error-text">
          <SVGs name="reject" />
          {props.error}
        </div>
      )}
    </div>
  );
}
