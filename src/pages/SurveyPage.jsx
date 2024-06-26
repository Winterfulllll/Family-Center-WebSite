import Header from '../components/Header/Header';
import MainSection from '../components/MainSection/MainSection';
import IntroSection from '../components/IntroSection/IntroSection';
import AssistantSection from '../components/AssistantSection/AssistantSection';
import AssistantMessage from '../components/AssistantMessage/AssistantMessage';
import Footer from '../components/Footer/Footer';

export default function SurveyPage() {
  return (
    <>
      <Header />
      <MainSection>
        <IntroSection>АНКЕТИРОВАНИЕ</IntroSection>
        <AssistantSection>
          <AssistantMessage
            pos_x="right"
            top="0px"
            left="-40px"
            rotation={20}
            isLong={true}
            width="500px"
          >
            ...
          </AssistantMessage>
        </AssistantSection>
        {/* ДОБАВИТЬ */}
      </MainSection>
      <Footer />
    </>
  );
}
