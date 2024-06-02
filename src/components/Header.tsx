import { Button } from "../elements/Buttons";
import { GetStartedForm } from "../elements/GetStartedForm";
import { LanguageSelector } from "../elements/LanguageSelector";
import { SVGs } from "../elements/SVGs";
import mainBg from "../assets/main-bg.jpeg";
import mainBgRu from "../assets/main-bg-ru.jpeg";
import { useTranslation } from "react-i18next";
import "./Header.scss";

export function HeaderLogo() {
  return (
    <div className="header-bar-logo-container">
      <SVGs name="logo" viewBox="0 0 111 30" className="header-bar-logo" />
    </div>
  );
}

function HeaderButtons() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  return (
    <div className="header-bar-buttons-container">
      <LanguageSelector />
      <Button
        variant="signIn"
        href={`/login/${i18n.language}`}
        className="is-small"
      >
        <span>{t("buttons.signInBtn")}</span>
      </Button>
    </div>
  );
}

export function HeaderBar(props: { children: React.ReactNode }) {
  return <div className="header-bar-container">{props.children}</div>;
}

function Hero() {
  const { t } = useTranslation();

  return (
    <div className="header-hero-container">
      <div className="header-hero-content">
        <h1>{t("hero.welcome")}</h1>
        <p>{t("hero.description")}</p>
      </div>
      <GetStartedForm />
    </div>
  );
}

export function HeaderOverlay() {
  const { i18n } = useTranslation();

  return (
    <div className="header-overlay-container">
      <img
        alt=""
        src={i18n.language === "ru" ? mainBgRu : mainBg}
        className="header-overlay-image"
      />
      <div className="header-overlay-bg"></div>
    </div>
  );
}

export function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <HeaderBar>
          <HeaderLogo />
          <HeaderButtons />
        </HeaderBar>
        <Hero />
        <HeaderOverlay />
      </div>
      <div className="divider"></div>
    </header>
  );
}
