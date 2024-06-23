import Header from '../../components/Header/Header';
import MainSection from '../../components/MainSection/MainSection';
import IntroSection from '../../components/IntroSections/IntroSection';
import AssistantSection from '../../components/AssistantSection/AssistantSection';
import AssistantMessage from '../../components/AssistantMessage/AssistantMessage';
import PsychologistSection1 from '../../components/PsychologistSection1/PsychologistSection1';
import Footer from '../../components/Footer/Footer';

export default function PsychologistPage() {
  return (
    <>
      <Header />
      <MainSection>
        <IntroSection>ПСИХОЛОГ</IntroSection>
        <AssistantSection>
          <AssistantMessage pos_x="right" pos_y="center">
            Психолог поможет:
          </AssistantMessage>
        </AssistantSection>
        <PsychologistSection1 />
      </MainSection>
      <Footer />
    </>
  );
}