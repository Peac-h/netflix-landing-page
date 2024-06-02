import { ReactNode, useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  useParams,
  useNavigate,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { FAQs } from "./components/FAQs";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";

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

const LanguageWrapper = (props: { children: ReactNode }) => {
  const { i18n } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (lang && (lang === "en" || lang === "ru")) {
      i18n.changeLanguage(lang);
    } else {
      navigate("/en", { replace: true });
    }
  }, [lang, i18n, navigate]);

  useEffect(() => {
    i18n.language === "en"
      ? (document.title =
          "[Clone] Netflix - Watch TV Shows Online, Watch Movies Online")
      : (document.title =
          "[Clone] Netflix Грузия — Смотрите сериалы и фильмы онлайн");
  }, [i18n.language]);

  return props.children;
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/en" replace />,
    },
    {
      path: "/:lang",
      element: (
        <LanguageWrapper>
          <Outlet />
        </LanguageWrapper>
      ),
      children: [
        {
          path: "",
          element: <Layout />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
