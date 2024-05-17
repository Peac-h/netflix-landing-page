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
    <div className="languageSelectorWrapper">
      <div className="languageSelectorButton">
        <span className="languageSelectorIcon languageSelectorIconLeft">
          <SVGs name="language" />
        </span>

        <select
          className="languageSelectorElements"
          aria-label="Select Language"
        >
          {LANGUAGES.map((language) => (
            <option
              key={language.code}
              lang={language.code}
              label={language.language}
              value={language.code}
              className="languageSelectorElement"
            >
              {language.language}
            </option>
          ))}
        </select>

        <span className="languageSelectorIcon languageSelectorIconRight">
          <SVGs name="caretDown" />
        </span>
      </div>
    </div>
  );
}
