import { FAQs } from "./components/FAQs";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Features />
        <FAQs />
      </Main>
      <Footer />
    </>
  );
}

export default App;
