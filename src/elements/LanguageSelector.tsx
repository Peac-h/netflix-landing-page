import { SVGs } from "./SVGs";
import "./LanguageSelector.scss";

const LANGUAGES = [
  {
    language: "English",
    code: "en",
  },
  {
    language: "Русский",
    code: "ru",
  },
];

export function LanguageSelector() {
  return (
    <div className="language-selector-container">
      <div className="language-selector-button">
        <span className="language-selector-icon language-selector-icon--left">
          <SVGs name="language" />
        </span>

        <select
          className="language-selector-elements"
          aria-label="Select Language"
        >
          {LANGUAGES.map((language) => (
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
