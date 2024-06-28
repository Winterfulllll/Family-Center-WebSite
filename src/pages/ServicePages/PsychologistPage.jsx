import Header from '../../components/Header/Header';
import MainSection from '../../components/MainSection/MainSection';
import IntroSection from '../../components/IntroSections/IntroSection';
import AssistantSection from '../../components/AssistantSection/AssistantSection';
import AssistantMessage from '../../components/AssistantMessage/AssistantMessage';
import TextBlocksSection from '../../components/TextBlocksSection/TextBlocksSection';
import Footer from '../../components/Footer/Footer';

export default function PsychologistPage() {
  return (
    <>
      <Header />
      <MainSection>
        <IntroSection>ПСИХОЛОГ</IntroSection>
        <AssistantSection>
          <AssistantMessage pos_x="right" top="0px" left="-40px" rotation={20}>
            <b>Психолог поможет:</b>
          </AssistantMessage>
        </AssistantSection>
        <TextBlocksSection />
      </MainSection>
      <Footer />
    </>
  );
}
