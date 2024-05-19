import { Button } from "./Buttons";
import { InputField } from "./InputField";
import "./GetStartedForm.scss";

export function GetStartedForm() {
  return (
    <div className="get-started-form-container">
      <form action="" className="get-started-form">
        <h3 className="get-started-form-header">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="get-started-form-content">
          <div className="get-started-form-input">
            <InputField name="Email" label="Email address" />
          </div>
          <div className="get-started-form-button">
            <Button
              variant="getStarted"
              icon="chevronRight"
              onClick={() => event?.preventDefault()}
            >
              <span>Get Started</span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
