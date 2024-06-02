import { LanguageSelector } from "../elements/LanguageSelector";
import { useFooterInfo, useFooterSignInInfo } from "../data/pageInfo";
import { useTranslation } from "react-i18next";
import "./Footer.scss";

function FooterContent(props: {
  footerInfo: {
    name: string;
    link: string;
  }[];
  isSignInPage?: boolean;
}) {
  const { t } = useTranslation();

  return (
    <footer className={`footer ${props.isSignInPage ? "sign-in-footer" : ""}`}>
      <div className="footer-content">
        <div className="footer-item-container">
          <div
            className={`footer-item footer-item--contact ${
              props.isSignInPage ? "footer-item--contact--foter-page" : ""
            }`}
          >
            <a href="#">{t("footer.header")}</a>
          </div>
        </div>
        <div className="footer-item-container">
          <ul className="footer-item footer-link-container">
            {props.footerInfo.map((item, index) => (
              <li
                key={index}
                className={`footer-link ${
                  props.isSignInPage ? "footer-link--login-page" : ""
                }`}
              >
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-item-container">
          <div
            className={`footer-item ${
              !props.isSignInPage ? "footer-item--language" : ""
            }`}
          >
            <LanguageSelector />
          </div>
        </div>
        {!props.isSignInPage && (
          <div className="footer-item-container">
            <div className="footer-item">Netflix {t("externals.georgia")}</div>
          </div>
        )}
      </div>
    </footer>
  );
}

export function Footer() {
  const footerInfo = useFooterInfo();
  return <FooterContent footerInfo={footerInfo} />;
}

export function FooterSignIn() {
  const footerSignInInfo = useFooterSignInInfo();
  return <FooterContent footerInfo={footerSignInInfo} isSignInPage={true} />;
}
