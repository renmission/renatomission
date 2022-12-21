import Footer from '../layouts/common/Footer';
import TechStack from '../layouts/TechStack';
import Portfolio from '../layouts/Portfolio';
import Hero from '../layouts/Hero';
import AppContainer from '../layouts/AppContainer';

export default function Home() {
  return (
    <>
     <AppContainer>
      <Hero />
      <Portfolio />
      <TechStack />
      <Footer />
    </AppContainer>
    </>
  )
}
