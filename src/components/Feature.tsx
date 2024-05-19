import { ReactNode } from "react";
import "./Feature.scss";

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
          <p className="feature-text-paragraph">{paragraph}</p>
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
