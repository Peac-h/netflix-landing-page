import { useState } from "react";
import { GetStartedForm } from "../elements/GetStartedForm";
import { SVGs } from "../elements/SVGs";
import { useTranslation } from "react-i18next";
import { useFAQsInfo } from "../data/pageInfo";
import "./FAQs.scss";

export function FAQs() {
  const [showAnswer, setShowAnswer] = useState<number | null>(null);

  const { t } = useTranslation();
  const faqsInfo = useFAQsInfo();

  return (
    <div className="faqs">
      <section className="faq">
        <div className="faq-content">
          <h2 className="faq-header">{t("faqs.header")}</h2>
          <div className="faq-list-container">
            <ul className="faq-list">
              {faqsInfo.map((faq, index) => (
                <li key={index} className="faq-list-item">
                  <h3
                    className="faq-list-item-header"
                    onClick={() =>
                      setShowAnswer(showAnswer === index ? null : index)
                    }
                  >
                    <button className="faq-button">
                      <span>{faq.question}</span>

                      <SVGs
                        name="plusBig"
                        viewbox="0 0 36 36"
                        height={36}
                        width={36}
                        styles={
                          showAnswer === index
                            ? {
                                transform: "rotate(-45deg)",
                              }
                            : {}
                        }
                        className="svg--big"
                      />
                      <SVGs
                        name="plusSmall"
                        viewbox="0 0 24 24"
                        height={24}
                        width={24}
                        styles={
                          showAnswer === index
                            ? {
                                transform: "rotate(-45deg)",
                              }
                            : {}
                        }
                        className="svg--small"
                      />
                    </button>
                  </h3>
                  <div
                    className={`faq-list-item-block ${
                      showAnswer === index ? "show" : ""
                    }`}
                  >
                    <p
                      className="faq-list-item-paragraph"
                      dangerouslySetInnerHTML={{
                        __html: faq.answer,
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <GetStartedForm />
        </div>
        <div className="divider"></div>
      </section>
    </div>
  );
}
