import { FAQ } from "./FAQ";
import { Feature } from "./Feature";

const features = [
  {
    header: "Enjoy on your TV",
    paragraph:
      "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    imageSrc:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
    videoSrc:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v",
  },
  {
    header: "Download your shows to watch offline",
    paragraph: "Save your favorites easily and always have something to watch.",
    imageSrc:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
    videoSrc: "",
  },
  {
    header: "Watch everywhere",
    paragraph:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    imageSrc:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png",
    videoSrc:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v",
  },
  {
    header: "Create profiles for kids",
    paragraph:
      "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
    imageSrc:
      "https://occ-0-7681-3467.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55",
    videoSrc: "",
  },
];

export function Main() {
  return (
    <main className="main">
      <div className="features">
        {features.map((feature, index) => (
          <Feature
            key={index}
            header={feature.header}
            paragraph={feature.paragraph}
            imageSrc={feature.imageSrc}
            videoSrc={feature.videoSrc}
            isFirstVideo={index === 0}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
      <div className="faqs">
        <FAQ />
      </div>
    </main>
  );
}
