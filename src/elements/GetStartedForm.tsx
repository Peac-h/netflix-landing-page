import { Button } from "./Buttons";
import { InputField } from "./InputField";
import "./GetStartedForm.scss";

export function GetStartedForm() {
  return (
    <div className="getStartedFormWrapper">
      <form action="" className="formWrapper">
        <h3 className="formHeader">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="formBody">
          <div className="formInput">
            <InputField name="Email" label="Email address" />
          </div>
          <div className="formButton">
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
