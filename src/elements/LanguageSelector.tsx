import { SVGs } from "./SVGs";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.scss";

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const changeLanguage = (lng: string) => {
    const newPath = location.pathname.replace(/^\/(en|ru)/, `/${lng}`);

    i18n.changeLanguage(lng);
    navigate(newPath);
  };

  return (
    <div className="language-selector-container">
      <div className="language-selector-button">
        <span className="language-selector-icon language-selector-icon--left">
          <SVGs name="language" />
        </span>

        <select
          className="language-selector-elements"
          aria-label="Select Language"
          onChange={(e) => changeLanguage(e.target.value)}
          value={i18n.language}
        >
          {[
            {
              language: "English",
              code: "en",
            },
            {
              language: "Русский",
              code: "ru",
            },
          ].map((language) => (
            <option
              key={language.code}
              lang={language.code}
              label={language.language}
              value={language.code}
              className="language-selector-element"
            >
              {language.language}
            </option>
          ))}
        </select>

        <span className="language-selector-icon language-selector-icon--right">
          <SVGs name="caretDown" />
        </span>
      </div>
    </div>
  );
}
