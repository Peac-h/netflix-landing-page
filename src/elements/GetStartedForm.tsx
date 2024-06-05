import React, { useRef, useState } from "react";
import { Button } from "./Buttons";
import { InputField } from "./InputField";
import { useTranslation } from "react-i18next";
import "./GetStartedForm.scss";

export function GetStartedForm() {
  const [email, setEmail] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<null | string>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { t } = useTranslation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email && formRef.current) {
      const formTop = formRef.current.getBoundingClientRect().top;
      window.scrollTo({
        top: formTop + window.scrollY - window.innerHeight / 2.33,
        behavior: "smooth",
      });
      inputRef.current?.focus();
    }
  };

  return (
    <div className="get-started-form-container">
      <form
        className="get-started-form"
        onSubmit={handleSubmit}
        noValidate
        ref={formRef}
      >
        <h3 className="get-started-form-header">{t("form.header")}</h3>
        <div
          className={`get-started-form-content ${emailError ? "error" : ""}`}
        >
          <div className="get-started-form-input">
            <InputField
              name="email"
              label={t("form.emailLabel")}
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              error={emailError}
              setError={setEmailError}
              inputRef={inputRef}
              required
            />
          </div>
          <div className="get-started-form-button">
            <Button variant="getStarted" icon="chevronRight" type="submit">
              <span>{t("buttons.getStartedBtn")}</span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
