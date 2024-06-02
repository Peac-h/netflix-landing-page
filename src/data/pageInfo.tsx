import { useTranslation } from "react-i18next";

export const useFAQsInfo = () => {
  const { t } = useTranslation();
  return t("faqs.questions", { returnObjects: true }) as {
    question: string;
    answer: string;
  }[];
};

export const useFooterInfo = () => {
  const { t } = useTranslation();
  return t("footer.links", { returnObjects: true }) as {
    name: string;
    link: string;
  }[];
};

export const useFooterSignInInfo = () => {
  const { t } = useTranslation();
  return t("signInPage.footerSignIn.links", { returnObjects: true }) as {
    name: string;
    link: string;
  }[];
};

export const useFeatureInfo = () => {
  const { t } = useTranslation();
  return t("features", { returnObjects: true }) as {
    header: string;
    paragraph: string;
    imageSrc: string;
    videoSrc: string;
  }[];
};
