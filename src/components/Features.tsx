import { ReactNode } from "react";
import "./Features.scss";

export function Features() {
  return (
    <div className="features">
      <Feature
        header={`Enjoy on your TV`}
        paragraph={`Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.`}
        imageSrc={`https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png`}
        videoSrc={`https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v`}
        isFirstVideo
      />

      <Feature
        header={`Download your shows to watch offline`}
        paragraph={`Save your favorites easily and always have something to watch.`}
        imageSrc={`https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg`}
        reverse
      >
        <div className="feature-media-box">
          <div className="feature-media-image-box">
            <img
              alt=""
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
            />
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
        imageSrc={`https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png`}
        videoSrc={`https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v`}
      />

      <Feature
        header={`Create profiles for kids`}
        paragraph={`Send kids on adventures with their favorite characters in a space made just for them—free with your membership.`}
        imageSrc={`https://occ-0-7681-3467.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55`}
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
