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
    <div className={`InputFieldWrapper ${className}`}>
      <label
        htmlFor={`${name}Input`}
        className="InputFieldLabel"
        style={
          isFocused || inputValue ? { top: ".8rem", fontSize: "1.2rem" } : {}
        }
      >
        {label}
      </label>
      <div className="InputFieldElements">
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
          className={`InputFieldElement ${error ? "InputFieldError" : ""}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}Error` : undefined}
        />
        {error && (
          <span id={`${name}Error`} className="InputFieldErrorText">
            {error}
          </span>
        )}
      </div>
    </div>
  );
}
