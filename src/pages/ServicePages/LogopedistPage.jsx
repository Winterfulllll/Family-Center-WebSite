import Header from '../../components/Header/Header';
import MainSection from '../../components/MainSection/MainSection';
import IntroSection from '../../components/IntroSections/IntroSection';
import AssistantSection from '../../components/AssistantSection/AssistantSection';
import AssistantMessage from '../../components/AssistantMessage/AssistantMessage';
import Footer from '../../components/Footer/Footer';

export default function LogopedistPage() {
  return (
    <>
      <Header />
      <MainSection>
        <IntroSection>ЛОГОПЕД</IntroSection>
        <AssistantSection>
          <AssistantMessage pos_x="right" pos_y="center">
            ...
          </AssistantMessage>
        </AssistantSection>
        {/* ДОБАВИТЬ */}
      </MainSection>
      <Footer />
    </>
  );
}
