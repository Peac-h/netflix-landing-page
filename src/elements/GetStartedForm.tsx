import React, { useState, useRef } from "react";
import { Button } from "./Buttons";
import { InputField } from "./InputField";
import "./GetStartedForm.scss";

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export function GetStartedForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !validateEmail(email)) return;
    console.log("Submitted email: ", email);
  };

  const handleClick = () => {
    if (!email) {
      if (formRef.current) {
        const formTop = formRef.current.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        window.scrollTo({
          top: formTop + window.scrollY - viewportHeight / 2.33,
          behavior: "smooth",
        });
      }
      inputRef.current?.focus();
    } else if (!validateEmail(email)) {
      setError("Invalid email address");
    } else {
      setError("");
    }
  };

  return (
    <div className="get-started-form-container">
      <form
        ref={formRef}
        className="get-started-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <h3 className="get-started-form-header">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="get-started-form-content">
          <div className="get-started-form-input">
            <InputField
              name="email"
              label="Email address"
              type="email"
              value={email}
              onChange={setEmail}
              error={error}
              setError={setError}
              required
              inputRef={inputRef}
            />
          </div>
          <div className="get-started-form-button">
            <Button
              variant="getStarted"
              icon="chevronRight"
              type="submit"
              onClick={handleClick}
            >
              <span>Get Started</span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
