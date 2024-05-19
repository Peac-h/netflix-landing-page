import { useState } from "react";
import "./InputField.scss";

export function InputField({
  name,
  label,
  type = "text",
  minLength = 5,
  maxLength = 50,
  autoComplete,
  className = "",
  error,
  onChange,
}: {
  name: string;
  label: string;
  type?: string;
  minLength?: number;
  maxLength?: number;
  autoComplete?: string;
  className?: string;
  error?: string;
  onChange?: (value: string) => void;
}) {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className={`input-field-container ${className}`}>
      <label
        htmlFor={`${name}Input`}
        className="input-field-label"
        style={
          isFocused || inputValue ? { top: ".8rem", fontSize: "1.2rem" } : {}
        }
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
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`input-field-element ${error ? "input-field-error" : ""}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}Error` : undefined}
        />
        {error && (
          <span id={`${name}Error`} className="input-field-error-text">
            {error}
          </span>
        )}
      </div>
    </div>
  );
}
