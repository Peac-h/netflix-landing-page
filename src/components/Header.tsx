import { Button } from "../elements/Buttons";
import { GetStartedForm } from "../elements/GetStartedForm";
import { LanguageSelector } from "../elements/LanguageSelector";
import { SVGs } from "../elements/SVGs";
import "./Header.scss";

export function Header() {
  return (
    <header className="headerWrapper">
      <div className="header">
        <div className="headerLogoContainer">
          <SVGs name="logo" viewbox="0 0 111 30" className="headerLogo" />
        </div>
        <div className="headerButtonsContainer">
          <LanguageSelector />
          <Button variant="signIn" href="#">
            <span>Sign&nbsp;In</span>
          </Button>
        </div>
      </div>
      <div className="hero">
        <div className="heroHeader">
          <h1>Unlimited movies, TV shows, and more</h1>
          <p>Watch anywhere. Cancel anytime.</p>
        </div>
        <GetStartedForm />
      </div>
      <div className="horizontalLine"></div>
      <div className="headerOverlayWrapper">
        <img
          alt="Image of movies collection"
          aria-hidden="true"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/31ef2c5c-3d08-47d5-b7a9-f29e4f4f893d/66936feb-6c3b-45f9-94fe-94016d3b245e/GE-en-20240506-POP_SIGNUP_TWO_WEEKS-perspective_WEB_ee164ed0-9331-47ab-8299-4331bc89fe99_small.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/31ef2c5c-3d08-47d5-b7a9-f29e4f4f893d/66936feb-6c3b-45f9-94fe-94016d3b245e/GE-en-20240506-POP_SIGNUP_TWO_WEEKS-perspective_WEB_ee164ed0-9331-47ab-8299-4331bc89fe99_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/31ef2c5c-3d08-47d5-b7a9-f29e4f4f893d/66936feb-6c3b-45f9-94fe-94016d3b245e/GE-en-20240506-POP_SIGNUP_TWO_WEEKS-perspective_WEB_ee164ed0-9331-47ab-8299-4331bc89fe99_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/31ef2c5c-3d08-47d5-b7a9-f29e4f4f893d/66936feb-6c3b-45f9-94fe-94016d3b245e/GE-en-20240506-POP_SIGNUP_TWO_WEEKS-perspective_WEB_ee164ed0-9331-47ab-8299-4331bc89fe99_large.jpg 1800w"
        />
        <div className="headerOverlay"></div>
      </div>
    </header>
  );
}
