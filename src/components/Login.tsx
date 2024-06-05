import { useRef, useState } from "react";
import { InputField } from "../elements/InputField";
import { HeaderBar, HeaderLogo } from "./Header";
import { Button } from "../elements/Buttons";
import { FooterSignIn } from "./Footer";
import Checkbox from "../elements/Checkbox";
import "./Login.scss";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

function LoginHeader() {
  const { lang } = useParams();

  return (
    <header className="login-header">
      <HeaderBar>
        <Link to={`/${lang}`}>
          <HeaderLogo />
        </Link>
      </HeaderBar>
    </header>
  );
}

function LoginForm(props: {
  useSignInCode: boolean;
  setUsesignInCode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const [emailError, setEmailError] = useState<null | string>(null);
  const [passwordError, setPasswordError] = useState<null | string>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form
      className="login-form"
      onSubmit={handleSubmit}
      noValidate
      ref={formRef}
    >
      <InputField
        name="email"
        label={t("signInPage.form.emailOrMobileLabel")}
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        error={emailError}
        setError={setEmailError}
        inputRef={inputRef}
        className="input-field--login-page"
        required
      />
      {props.useSignInCode ? (
        <p className="login-form-message">{t("signInPage.form.message")}</p>
      ) : (
        <InputField
          name="password"
          label={t("signInPage.form.passwordLabel")}
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          error={passwordError}
          setError={setPasswordError}
          inputRef={inputRef}
          className="input-field--login-page"
          required
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
        <Link to="/" className="signup-link">
          {t("signInPage.form.buttons.signUpNow")}
        </Link>
        .
      </div>

      <div className="recaptcha">
        <div className="recaptcha-info">
          {t("signInPage.form.recaptchaInfo")}&nbsp;
          <span className={props.learnMore ? "hidden" : "visible"}>
            <Button
              variant="learnMore"
              onClick={() => props.setLearnMore((m) => !m)}
            >
              {t("signInPage.form.buttons.learnMore")}
            </Button>
          </span>
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
          </a>
          , {t("signInPage.form.recaptchaDetailsPartTwo")}
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
          src="https://raw.githubusercontent.com/Peac-h/netflix-landing-page/main/src/assets/login/Login-bg--small.jpg"
          srcSet="
          https://raw.githubusercontent.com/Peac-h/netflix-landing-page/main/src/assets/login/Login-bg--small.jpg 1000w, 
          https://raw.githubusercontent.com/Peac-h/netflix-landing-page/main/src/assets/login/Login-bg--medium.jpg 1500w, 
          https://raw.githubusercontent.com/Peac-h/netflix-landing-page/main/src/assets/login/Login-bg--large.jpg 1800w"
          alt=""
        />
      ) : (
        <img
          className="login-overlay-image"
          src="https://raw.githubusercontent.com/Peac-h/netflix-landing-page/main/src/assets/login/Login-bg--small-ru.jpeg"
          srcSet="https://raw.githubusercontent.com/Peac-h/netflix-landing-page/main/src/assets/login/Login-bg--small-ru.jpeg 1000w, https://raw.githubusercontent.com/Peac-h/netflix-landing-page/main/src/assets/login/Login-bg--medium-ru.jpeg 1500w, https://raw.githubusercontent.com/Peac-h/netflix-landing-page/main/src/assets/login/Login-bg--large-ru.jpeg 1800w"
          alt=""
        ></img>
      )}
    </div>
  );
}

export function Login() {
  const [rememberMeOn, setRememberMeOn] = useState(true);
  const [learnMore, setLearnMore] = useState(false);
  const [useSignInCode, setUsesignInCode] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="login">
      <LoginHeader />

      <div className="login-content-wrapper">
        <div className="login-content">
          <div className="login-content-header">
            <h1 className="login-content-heading">
              {t("signInPage.form.header")}
            </h1>
          </div>

          <LoginForm
            useSignInCode={useSignInCode}
            setUsesignInCode={setUsesignInCode}
          />

          <LoginFooter
            rememberMeOn={rememberMeOn}
            setRememberMeOn={setRememberMeOn}
            learnMore={learnMore}
            setLearnMore={setLearnMore}
          />
        </div>
      </div>

      <div className="login-footer">
        <FooterSignIn />
      </div>

      <LoginOverlay />
    </div>
  );
}
