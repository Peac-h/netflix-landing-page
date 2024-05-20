import { LanguageSelector } from "../elements/LanguageSelector";
import "./Footer.scss";
import { footerInfo } from "../pageInfo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-item-container">
          <div className="footer-item footer-item--contact">
            <a href="#">Questions? Contact us.</a>
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
          <div className="footer-item">Netflix Georgia</div>
        </div>
      </div>
    </footer>
  );
}
