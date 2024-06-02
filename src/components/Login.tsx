import { useRef, useState } from "react";
import { InputField } from "../elements/InputField";
import { HeaderBar, HeaderLogo } from "./Header";
import { Button } from "../elements/Buttons";
import { FooterSignIn } from "./Footer";
import Checkbox from "../elements/Checkbox";
import "./Login.scss";
import { useTranslation } from "react-i18next";

// routes
// inputs
// double check
// bg sources

function LoginHeader() {
  return (
    <header className="login-header">
      <HeaderBar>
        <HeaderLogo />
      </HeaderBar>
    </header>
  );
}

function LoginForm(props: {
  useSignInCode: boolean;
  setUsesignInCode: React.Dispatch<React.SetStateAction<boolean>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  inputRef: React.RefObject<HTMLInputElement>;
}) {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className="login-form" onSubmit={handleSubmit} noValidate>
      <InputField
        name="email"
        label={t("signInPage.form.emailOrMobileLabel")}
        type="email"
        error={props.error}
        setError={props.setError}
        required
        inputRef={props.inputRef}
        className="input-field--login-page"
      />
      {props.useSignInCode ? (
        <p className="login-form-message">{t("signInPage.form.message")}</p>
      ) : (
        <InputField
          name="password"
          label={t("signInPage.form.passwordLabel")}
          type="password"
          error={props.error}
          setError={props.setError}
          required
          inputRef={props.inputRef}
          className="input-field--login-page"
        />
      )}

      <Button variant="signIn" type="submit">
        <span>
          {props.useSignInCode
            ? t("signInPage.form.buttons.sendSignIn")
            : t("signInPage.form.buttons.signIn")}
        </span>
      </Button>

      <p className="login-form-separator">{t("signInPage.form.separator")}</p>

      <Button
        variant="signIn"
        className="is-transparent"
        onClick={() => props.setUsesignInCode((s) => !s)}
      >
        <span>
          {props.useSignInCode
            ? t("signInPage.form.buttons.usePassword")
            : t("signInPage.form.buttons.singleSignIn")}
        </span>
      </Button>

      <a href="#" className="login-form-forgot-password">
        {props.useSignInCode ? (
          <div
            className={`${
              i18n.language === "ru"
                ? "login-form-forgot-email--ru"
                : "login-form-forgot-email"
            }`}
          >
            {t("signInPage.form.buttons.forgotEmailOrPhone")}
          </div>
        ) : (
          t("signInPage.form.buttons.forgotPassword")
        )}
      </a>
    </form>
  );
}

function LoginFooter(props: {
  rememberMeOn: boolean;
  setRememberMeOn: React.Dispatch<React.SetStateAction<boolean>>;
  learnMore: boolean;
  setLearnMore: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { t } = useTranslation();

  return (
    <div className="login-content-footer">
      <Checkbox
        label={t("signInPage.form.buttons.rememberMe")}
        isChecked={props.rememberMeOn}
        onToggle={() => props.setRememberMeOn((r) => !r)}
        name="rememberMe"
      />

      <div className="signup">
        {t("signInPage.form.newToNetflix")}{" "}
        <a href="/" className="signup-link">
          {t("signInPage.form.buttons.signUpNow")}
        </a>
        .
      </div>

      <div className="recaptcha">
        <div className="recaptcha-info">
          {t("signInPage.form.recaptchaInfo")}&nbsp;
          {!props.learnMore && (
            <Button
              variant="learnMore"
              onClick={() => props.setLearnMore((m) => !m)}
            >
              {t("signInPage.form.buttons.learnMore")}
            </Button>
          )}
        </div>

        <div
          className={`recaptcha-details ${props.learnMore ? "visible" : ""}`}
        >
          {t("signInPage.form.recaptchaDetailsPartOne")}{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            className="recaptcha-link"
          >
            {t("signInPage.form.buttons.privacyPolicy")}
          </a>{" "}
          {t("signInPage.form.and")}{" "}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            className="recaptcha-link"
          >
            {t("signInPage.form.buttons.termsOfUse")}
          </a>{" "}
          {t("signInPage.form.recaptchaDetailsPartTwo")}
        </div>
      </div>
    </div>
  );
}

function LoginOverlay() {
  const { i18n } = useTranslation();

  return (
    <div className="login-overlay">
      {i18n.language === "en" ? (
        <img
          className="login-overlay-image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/31ef2c5c-3d08-47d5-b7a9-f29e4f4f893d/66936feb-6c3b-45f9-94fe-94016d3b245e/GE-en-20240506-POP_SIGNUP_TWO_WEEKS-perspective_WEB_ee164ed0-9331-47ab-8299-4331bc89fe99_small.jpg"
          srcSet="
    https://assets.nflxext.com/ffe/siteui/vlv3/31ef2c5c-3d08-47d5-b7a9-f29e4f4f893d/66936feb-6c3b-45f9-94fe-94016d3b245e/GE-en-20240506-POP_SIGNUP_TWO_WEEKS-perspective_WEB_ee164ed0-9331-47ab-8299-4331bc89fe99_small.jpg 1000w, 
    https://assets.nflxext.com/ffe/siteui/vlv3/31ef2c5c-3d08-47d5-b7a9-f29e4f4f893d/66936feb-6c3b-45f9-94fe-94016d3b245e/GE-en-20240506-POP_SIGNUP_TWO_WEEKS-perspective_WEB_ee164ed0-9331-47ab-8299-4331bc89fe99_medium.jpg 1500w, 
    https://assets.nflxext.com/ffe/siteui/vlv3/31ef2c5c-3d08-47d5-b7a9-f29e4f4f893d/66936feb-6c3b-45f9-94fe-94016d3b245e/GE-en-20240506-POP_SIGNUP_TWO_WEEKS-perspective_WEB_ee164ed0-9331-47ab-8299-4331bc89fe99_large.jpg 1800w"
          alt=""
        />
      ) : (
        <img
          className="login-overlay-image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/31ef2c5c-3d08-47d5-b7a9-f29e4f4f893d/04c978c9-7846-4802-bb5d-3ecaede54e94/GE-ru-20240506-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7be55528-4261-4859-bf89-512cd35149ce_small.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/31ef2c5c-3d08-47d5-b7a9-f29e4f4f893d/04c978c9-7846-4802-bb5d-3ecaede54e94/GE-ru-20240506-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7be55528-4261-4859-bf89-512cd35149ce_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/31ef2c5c-3d08-47d5-b7a9-f29e4f4f893d/04c978c9-7846-4802-bb5d-3ecaede54e94/GE-ru-20240506-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7be55528-4261-4859-bf89-512cd35149ce_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/31ef2c5c-3d08-47d5-b7a9-f29e4f4f893d/04c978c9-7846-4802-bb5d-3ecaede54e94/GE-ru-20240506-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7be55528-4261-4859-bf89-512cd35149ce_large.jpg 1800w"
          alt=""
        ></img>
      )}
    </div>
  );
}

export function Login() {
  const [error, setError] = useState<null | string>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [rememberMeOn, setRememberMeOn] = useState(true);
  const [learnMore, setLearnMore] = useState(false);
  const [useSignInCode, setUsesignInCode] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="login">
      <LoginHeader />

      <div className="login-content">
        <div className="login-content-header">
          <h1 className="login-content-heading">
            {t("signInPage.form.header")}
          </h1>
        </div>

        <LoginForm
          useSignInCode={useSignInCode}
          setUsesignInCode={setUsesignInCode}
          error={error}
          setError={setError}
          inputRef={inputRef}
        />
        <LoginFooter
          rememberMeOn={rememberMeOn}
          setRememberMeOn={setRememberMeOn}
          learnMore={learnMore}
          setLearnMore={setLearnMore}
        />
      </div>

      <FooterSignIn />
      <LoginOverlay />
    </div>
  );
}
