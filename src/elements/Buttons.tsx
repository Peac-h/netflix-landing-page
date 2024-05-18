import "./Buttons.scss";
import { SVGs, IconName } from "./SVGs";

export function Button({
  variant,
  children,
  onClick,
  href,
  className = "",
  icon,
}: {
  variant: "getStarted" | "signIn";
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  icon?: IconName;
}) {
  if (href) {
    return (
      <button
        className={`button button--${variant} ${className}`}
        onClick={onClick}
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
    >
      {children}
      {icon && <SVGs name={icon} viewbox="0 0 24 24" />}
    </button>
  );
}
