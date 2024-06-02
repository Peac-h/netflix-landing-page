import React, { useEffect, useState } from "react";
import { SVGs } from "./SVGs";
import "./InputField.scss";

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
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  inputRef: React.RefObject<HTMLInputElement>;
  type?: string;
  minLength?: number;
  maxLength?: number;
  autoComplete?: string;
  className?: string;
}) {
  const [value, setValue] = useState<null | string>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (!value) return;

    if (props.type === "email") {
      setIsValid(validateEmail(value));
    } else if (props.type === "password") {
      setIsValid(validatePassword(value));
    }

    if (!isValid) {
      props.setError(`Invalid ${props.type}`);
    } else {
      props.setError(null);
    }
  }, [props, isValid, value]);

  return (
    <div
      className={`input-field-container ${props.className} ${
        props.error ? "input-field-error" : ""
      } 
      ${isValid ? "input-field-valid" : ""}
      `}
    >
      <label
        htmlFor={`${name}Input`}
        className="input-field-label"
        style={isFocused || value ? { top: ".8rem", fontSize: "1.2rem" } : {}}
      >
        {props.label}
      </label>
      <div className="input-field-elements">
        <input
          autoComplete={props.autoComplete || props.name}
          minLength={props.minLength}
          maxLength={props.maxLength}
          type={props.type}
          name={props.name}
          id={`${props.name}Input`}
          value={value ?? undefined}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="input-field-element"
          required={props.required}
          ref={props.inputRef}
        />
        {props.error && (
          <span id={`${props.name}Error`} className="input-field-error-text">
            <SVGs name="reject" /> {props.error}
          </span>
        )}
      </div>
    </div>
  );
}
