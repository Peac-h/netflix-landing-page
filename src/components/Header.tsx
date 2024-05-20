import { Button } from "../elements/Buttons";
import { GetStartedForm } from "../elements/GetStartedForm";
import { LanguageSelector } from "../elements/LanguageSelector";
import { SVGs } from "../elements/SVGs";
import "./Header.scss";
import mainBg from "../assets/main-bg.jpeg";

function HeaderLogo() {
  return (
    <div className="header-bar-logo-container">
      <SVGs name="logo" viewbox="0 0 111 30" className="header-bar-logo" />
    </div>
  );
}

function HeaderButtons() {
  return (
    <div className="header-bar-buttons-container">
      <LanguageSelector />
      <Button variant="signIn" href="#">
        <span>Sign In</span>
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
  return (
    <div className="header-hero-container">
      <div className="header-hero-content">
        <h1 className="header-hero-heading">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="header-hero-paragraph">Watch anywhere. Cancel anytime.</p>
      </div>
      <GetStartedForm />
    </div>
  );
}

function HeaderOverlay() {
  return (
    <div className="header-overlay-container">
      <img
        alt="Image of movies collection"
        src={mainBg}
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
        <HeaderBar />
        <Hero />
        <HeaderOverlay />
      </div>
      <div className="divider"></div>
    </header>
  );
}
