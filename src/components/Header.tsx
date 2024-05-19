import { Button } from "../elements/Buttons";
import { GetStartedForm } from "../elements/GetStartedForm";
import { LanguageSelector } from "../elements/LanguageSelector";
import { SVGs } from "../elements/SVGs";
import "./Header.scss";

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
        aria-hidden="true"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/31ef2c5c-3d08-47d5-b7a9-f29e4f4f893d/66936feb-6c3b-45f9-94fe-94016d3b245e/GE-en-20240506-POP_SIGNUP_TWO_WEEKS-perspective_WEB_ee164ed0-9331-47ab-8299-4331bc89fe99_small.jpg"
        srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/31ef2c5c-3d08-47d5-b7a9-f29e4f4f893d/66936feb-6c3b-45f9-94fe-94016d3b245e/GE-en-20240506-POP_SIGNUP_TWO_WEEKS-perspective_WEB_ee164ed0-9331-47ab-8299-4331bc89fe99_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/31ef2c5c-3d08-47d5-b7a9-f29e4f4f893d/66936feb-6c3b-45f9-94fe-94016d3b245e/GE-en-20240506-POP_SIGNUP_TWO_WEEKS-perspective_WEB_ee164ed0-9331-47ab-8299-4331bc89fe99_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/31ef2c5c-3d08-47d5-b7a9-f29e4f4f893d/66936feb-6c3b-45f9-94fe-94016d3b245e/GE-en-20240506-POP_SIGNUP_TWO_WEEKS-perspective_WEB_ee164ed0-9331-47ab-8299-4331bc89fe99_large.jpg 1800w"
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
