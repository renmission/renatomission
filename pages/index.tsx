import Footer from "../layouts/common/Footer";
import TechStack from "../layouts/TechStack";
import Portfolio from "../layouts/Portfolio";
import Hero from "../layouts/Hero";
import AppContainer from "../layouts/AppContainer";
import Header from "../layouts/common/Header";

export default function Home() {
  return (
    <>
      <AppContainer>
        <Header />
        <Hero />
        <Portfolio />
        <TechStack />
        <Footer />
      </AppContainer>
    </>
  );
}
