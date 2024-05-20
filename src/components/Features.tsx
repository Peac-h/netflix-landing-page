import { ReactNode } from "react";
import "./Features.scss";
import imgTv from "../assets/tv.png";
import imgKids from "../assets/kids.png";
import imgDevices from "../assets/devices.png";
import imgStrTh from "../assets/strTh.jpg";
import imgStrTh2 from "../assets/strTh2.png";
import videoStrTh from "../assets/video-strTh.mp4";
import videoHaunted from "../assets/video-haunted.mp4";

export function Features() {
  return (
    <div className="features">
      <Feature
        header={`Enjoy on your TV`}
        paragraph={`Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.`}
        imageSrc={imgTv}
        videoSrc={videoHaunted}
        isFirstVideo
      />

      <Feature
        header={`Download your shows to watch offline`}
        paragraph={`Save your favorites easily and always have something to watch.`}
        imageSrc={imgStrTh}
        reverse
      >
        <div className="feature-media-box">
          <div className="feature-media-image-box">
            <img alt="Poster" src={imgStrTh2} />
          </div>
          <div className="feature-media-text-box">
            <div className="feature-media-text-title">Stranger Things</div>
            <div className="feature-media-text-status">Downloading...</div>
          </div>
          <div className="feature-media-animation-box"></div>
        </div>
      </Feature>

      <Feature
        header={`Watch everywhere`}
        paragraph={`Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.`}
        imageSrc={imgDevices}
        videoSrc={videoStrTh}
      />

      <Feature
        header={`Create profiles for kids`}
        paragraph={`Send kids on adventures with their favorite characters in a space made just for them—free with your membership.`}
        imageSrc={imgKids}
        reverse
      />
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
