import Header from '../../components/Header/Header';
import MainSection from '../../components/MainSection/MainSection';
import IntroSection from '../../components/IntroSection/IntroSection';
import AssistantSection from '../../components/AssistantSection/AssistantSection';
import AssistantMessage from '../../components/AssistantMessage/AssistantMessage';
import AssistantButton from '../../components/AssistantButton/AssistantButton';
import Footer from '../../components/Footer/Footer';

export default function LawyerPage() {
  return (
    <>
      <Header />
      <MainSection>
        <IntroSection>ЮРИСТ</IntroSection>
        <AssistantSection>
          <AssistantMessage
            pos_x="right"
            top={30}
            left={-50}
            rotation={10}
            isLong={true}
            width={500}
          >
            <b>
              Проведет юридическую <br />
              консультацию по вопросам <br />
              семьи и детства, мерам <br />
              социальной поддержки
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
