import Footer from "../components/common/Footer";
import TechStack from "../components/TechStack";
import Portfolio from "../components/Portfolio";
import Hero from "../components/Hero";
import AppContainer from "../components/AppContainer";
import Header from "../components/common/Header";
import GetInTouch from "../components/GetInTouch";

export default function Home() {
  return (
    <>
      <AppContainer>
        <Header />
        <Hero />
        <Portfolio />
        <TechStack />
        <GetInTouch />
        <Footer />
      </AppContainer>
    </>
  );
}
