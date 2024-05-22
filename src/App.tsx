import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { FAQs } from "./components/FAQs";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

const Layout = () => (
  <>
    <Header />
    <Main>
      <Features />
      <FAQs />
    </Main>
    <Footer />
  </>
);

const App = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    i18n.language === "en"
      ? (document.title =
          "Netflix - Watch TV Shows Online, Watch Movies Online")
      : (document.title = "Netflix Грузия — Смотрите сериалы и фильмы онлайн");
  }, [i18n.language]);

  useEffect(() => {
    const currentLang = location.pathname.split("/")[1];
    if (currentLang && currentLang !== i18n.language) {
      i18n.changeLanguage(currentLang);
      navigate(`/${i18n.language}`);
    }
  }, [navigate, location, i18n]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to={`/${i18n.language}`} />} />
        <Route path="/en/*" element={<Layout />} />
        <Route path="/ru/*" element={<Layout />} />
        <Route path="*" element={<Navigate to={`/${i18n.language}`} />} />
      </Routes>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
