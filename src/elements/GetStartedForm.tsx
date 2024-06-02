import React, { useState, useRef } from "react";
import { Button } from "./Buttons";
import { InputField } from "./InputField";
import { useTranslation } from "react-i18next";
import "./GetStartedForm.scss";

export function GetStartedForm() {
  const [error, setError] = useState<null | string>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { t } = useTranslation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="get-started-form-container">
      <form
        ref={formRef}
        className="get-started-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <h3 className="get-started-form-header">{t("form.header")}</h3>
        <div className="get-started-form-content">
          <div className="get-started-form-input">
            <InputField
              name="email"
              label={t("form.emailLabel")}
              type="email"
              error={error}
              setError={setError}
              required
              inputRef={inputRef}
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
