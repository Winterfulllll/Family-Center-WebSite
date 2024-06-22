import Header from '../../components/Header/Header';
import MainSection from '../../components/MainSection/MainSection';
import IntroSection from '../../components/IntroSections/IntroSection';
import AssistantSection from '../../components/AssistantSection/AssistantSection';
import Footer from '../../components/Footer/Footer';
import TallDiv from '../../components/TallDiv';

import './HomePage.css';
import PsychologistSection1 from '../../components/PsychologistSection1/PsychologistSection1';

export default function HomePage() {
  const path = '/';

  return (
    <>
      <Header />
      <MainSection>
        <IntroSection path={path}>ПСИХОЛОГ</IntroSection>
        <AssistantSection />
        <PsychologistSection1 />
      </MainSection>
      <Footer />
    </>
  );
}
