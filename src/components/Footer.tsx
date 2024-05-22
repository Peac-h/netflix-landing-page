import { LanguageSelector } from "../elements/LanguageSelector";
import { useFooterInfo } from "../data/pageInfo";
import { useTranslation } from "react-i18next";
import "./Footer.scss";

export function Footer() {
  const { t } = useTranslation();
  const footerInfo = useFooterInfo();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-item-container">
          <div className="footer-item footer-item--contact">
            <a href="#">{t("footer.header")}</a>
          </div>
        </div>
        <div className="footer-item-container">
          <ul className="footer-item footer-link-container">
            {footerInfo.map((item, index) => (
              <li key={index} className="footer-link">
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-item-container">
          <div className="footer-item footer-item--language">
            <LanguageSelector />
          </div>
        </div>
        <div className="footer-item-container">
          <div className="footer-item">Netflix {t("externals.georgia")}</div>
        </div>
      </div>
    </footer>
  );
}
