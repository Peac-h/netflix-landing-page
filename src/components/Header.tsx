import { Button } from "../elements/Buttons";
import { GetStartedForm } from "../elements/GetStartedForm";
import { LanguageSelector } from "../elements/LanguageSelector";
import { SVGs } from "../elements/SVGs";
import mainBg from "../assets/main-bg.jpeg";
import mainBgRu from "../assets/main-bg-ru.jpeg";
import { useTranslation } from "react-i18next";
import "./Header.scss";

function HeaderLogo() {
  return (
    <div className="header-bar-logo-container">
      <SVGs name="logo" viewbox="0 0 111 30" className="header-bar-logo" />
    </div>
  );
}

function HeaderButtons() {
  const { t } = useTranslation();

  return (
    <div className="header-bar-buttons-container">
      <LanguageSelector />
      <Button variant="signIn" href="#">
        <span>{t("buttons.signInBtn")}</span>
      </Button>
    </div>
  );
}

function HeaderBar() {
  return (
    <div className="header-bar-container">
      <HeaderLogo />
      <HeaderButtons />
    </div>
  );
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

function HeaderOverlay() {
  const { i18n } = useTranslation();

  return (
    <div className="header-overlay-container">
      <img
        alt="Image of movies collection"
        src={i18n.language === "ru" ? mainBgRu : mainBg}
        className="header-overlay-image"
      />
      <div className="header-overlay-bg"></div>
    </div>
  );
}

export function Header() {
  const { i18n } = useTranslation();

  return (
    <header
      className={`header ${i18n.language === "ru" ? "header-hight--ru" : ""}`}
    >
      <div className="header-content">
        <HeaderBar />
        <Hero />
        <HeaderOverlay />
      </div>
      <div className="divider"></div>
    </header>
  );
}
