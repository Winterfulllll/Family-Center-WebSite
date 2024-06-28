import Header from '../../components/Header/Header';
import MainSection from '../../components/MainSection/MainSection';
import IntroSection from '../../components/IntroSection/IntroSection';
import AssistantSection from '../../components/AssistantSection/AssistantSection';
import AssistantMessage from '../../components/AssistantMessage/AssistantMessage';
import Footer from '../../components/Footer/Footer';

export default function ParentClubsPage() {
  return (
    <>
      <Header />
      <MainSection>
        <IntroSection>РОДИТЕЛЬСКИЕ КЛУБЫ</IntroSection>
        <AssistantSection>
          <AssistantMessage pos_x="right" top={0} left={-40} rotation={20}>
            <b>
              Предлагаем активности
              <br />
              и мероприятия для
              <br />
              родителей или законных представителей
            </b>
          </AssistantMessage>
        </AssistantSection>
        {/* ДОБАВИТЬ */}
      </MainSection>
      <Footer />
    </>
  );
}
