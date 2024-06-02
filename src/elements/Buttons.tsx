import { SVGs, IconName } from "./SVGs";
import "./Buttons.scss";

export function Button(props: {
  variant: "getStarted" | "signIn" | "learnMore";
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: "is-small" | "is-transparent";
  icon?: IconName;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <button
      className={`button button--${props.variant} ${
        props.className ? "button--" + props.className : ""
      }`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.href ? (
        <a href={props.href}>
          {props.children}
          {props.icon && <SVGs name={props.icon} viewBox="0 0 24 24" />}
        </a>
      ) : (
        <>
          {props.children}
          {props.icon && <SVGs name={props.icon} viewBox="0 0 24 24" />}
        </>
      )}
    </button>
  );
}
