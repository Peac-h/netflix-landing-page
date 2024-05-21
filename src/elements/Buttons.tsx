import "./Buttons.scss";
import { SVGs, IconName } from "./SVGs";

export function Button({
  variant,
  children,
  onClick,
  href,
  className = "",
  icon,
  type = "button",
}: {
  variant: "getStarted" | "signIn";
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  icon?: IconName;
  type?: "button" | "submit" | "reset";
}) {
  if (href) {
    return (
      <button
        className={`button button--${variant} ${className}`}
        onClick={onClick}
        type={type}
      >
        <a href={href}>
          {children}
          {icon && <SVGs name={icon} viewbox="0 0 24 24" />}
        </a>
      </button>
    );
  }

  return (
    <button
      className={`button button--${variant} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
      {icon && <SVGs name={icon} viewbox="0 0 24 24" />}
    </button>
  );
}
