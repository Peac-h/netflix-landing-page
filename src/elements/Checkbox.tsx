import { SVGs } from "./SVGs";
import "./Checkbox.scss";

const Checkbox = (props: {
  label: string;
  isChecked: boolean;
  onToggle: () => void;
  name: string;
}) => {
  return (
    <div className="checkbox-wrapper" onClick={props.onToggle}>
      <input
        className="checkbox-input"
        type="checkbox"
        name={props.name}
        checked={props.isChecked}
        readOnly
      />
      <div
        className={`checkbox-container ${props.isChecked ? "is-checked" : ""}`}
      >
        <SVGs name="checkboxChecked" />
      </div>
      <label htmlFor={props.name}>{props.label}</label>
    </div>
  );
};

export default Checkbox;
