import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useFeatureInfo } from "../data/pageInfo";
import "./Features.scss";

export function Features() {
  const { t } = useTranslation();
  const featureInfo = useFeatureInfo();

  return (
    <div className="features">
      {featureInfo.map((feature, index) => (
        <Feature
          key={index}
          header={feature.header}
          paragraph={feature.paragraph}
          imageSrc={feature.imageSrc}
          videoSrc={feature.videoSrc}
          reverse={index % 2 !== 0}
          isFirstVideo={index === 0}
        >
          {index === 1 && (
            <div className="feature-media-box">
              <div className="feature-media-image-box">
                <img
                  alt="Poster"
                  src="https://raw.githubusercontent.com/Peac-h/netflix-landing-page/main/src/assets/strTh2.png"
                />
              </div>
              <div className="feature-media-text-box">
                <div className="feature-media-text-title">
                  {t("externals.strangerThings")}
                </div>
                <div className="feature-media-text-status">
                  {t("externals.downloading")}...
                </div>
              </div>
              <div className="feature-media-animation-box"></div>
            </div>
          )}
        </Feature>
      ))}
    </div>
  );
}

export function Feature({
  header,
  paragraph,
  imageSrc,
  videoSrc,
  children,
  reverse,
  isFirstVideo,
}: {
  header: string;
  paragraph: string;
  imageSrc?: string;
  videoSrc?: string;
  children?: ReactNode;
  reverse?: boolean;
  isFirstVideo?: boolean;
}) {
  return (
    <section className="feature">
      <div className={`feature-content ${reverse ? "reverse" : ""}`}>
        <div className="feature-text-container">
          <h2 className="feature-text-header">{header}</h2>
          <p
            className="feature-text-paragraph"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          ></p>
        </div>

        <div className="feature-media-container">
          {imageSrc && (
            <img
              alt="Frame image for video"
              aria-hidden="true"
              src={imageSrc}
              className="feature-media-image"
            />
          )}
          {videoSrc && (
            <video
              autoPlay
              playsInline
              muted
              loop
              className={`feature-media-video ${
                isFirstVideo
                  ? "feature-media-video--first"
                  : "feature-media-video--second"
              }`}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}
          {children}
        </div>
      </div>
      <div className="divider"></div>
    </section>
  );
}
