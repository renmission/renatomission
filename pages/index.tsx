import AppContainer from '../components/AppContainer';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Hero from '../components/Hero';
import Story from '../components/Story';
import Marquee from '../components/Marquee';
import Portfolio from '../components/Portfolio';
import TechStack from '../components/TechStack';
import Questions from '../components/Questions';
import GetInTouch from '../components/GetInTouch';

export default function Home() {
  return (
    <AppContainer>
      <Header />
      <main id="main">
        <Hero />
        <Story />
        <Marquee />
        <Portfolio />
        <TechStack />
        <Questions />
        <GetInTouch />
      </main>
      <Footer />
    </AppContainer>
  );
}
