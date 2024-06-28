import Header from '../../components/Header/Header';
import MainSection from '../../components/MainSection/MainSection';
import IntroSection from '../../components/IntroSections/IntroSection';
import AssistantSection from '../../components/AssistantSection/AssistantSection';
import AssistantMessage from '../../components/AssistantMessage/AssistantMessage';
import PsychologistSection from '../../components/PsychologistSection/PsychologistSection';
import Footer from '../../components/Footer/Footer';

export default function PsychologistPage() {
  return (
    <>
      <Header />
      <MainSection>
        <IntroSection>ПСИХОЛОГ</IntroSection>
        <AssistantSection>
          <AssistantMessage pos_x="right" top="0px" left="-40px" rotation={20}>
            Психолог поможет:
          </AssistantMessage>
        </AssistantSection>
        <PsychologistSection />
      </MainSection>
      <Footer />
    </>
  );
}
