import Header from '../../components/Header/Header';
import MainSection from '../../components/MainSection/MainSection';
import IntroSection from '../../components/IntroSection/IntroSection';
import AssistantSection from '../../components/AssistantSection/AssistantSection';
import AssistantMessage from '../../components/AssistantMessage/AssistantMessage';
import AssistantButton from '../../components/AssistantButton/AssistantButton';
import Footer from '../../components/Footer/Footer';

export default function GuardianshipPage() {
  return (
    <>
      <Header />
      <MainSection>
        <IntroSection>ВОПРОСЫ ОПЕКИ</IntroSection>
        <AssistantSection>
          <AssistantMessage pos_x="right" top={30} left={-50} rotation={10}>
            <b>
              Специалисты <br />
              проконсультируют по <br />
              вопросам опеки <br />
              и попечительства
            </b>
          </AssistantMessage>
          <AssistantButton pos_x="right" path="">
            Запись на прием
          </AssistantButton>
        </AssistantSection>
        {/* ДОБАВИТЬ */}
      </MainSection>
      <Footer />
    </>
  );
}
