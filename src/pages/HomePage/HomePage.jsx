import Header from '../../components/Header/Header';
import MainSection from '../../components/MainSection/MainSection';
import IntroSection from '../../components/IntroSections/IntroSection';
import AssistantSection from '../../components/AssistantSection/AssistantSection';
import Footer from '../../components/Footer/Footer';

import './HomePage.css';

export default function HomePage() {
  return (
    <>
      <Header />
      <MainSection>
        <IntroSection>Название</IntroSection>
        <AssistantSection />
        <div
          style={{
            height: '2000px',
            backgroundColor: 'lightblue',
          }}
        ></div>
      </MainSection>
      <Footer />
    </>
  );
}
