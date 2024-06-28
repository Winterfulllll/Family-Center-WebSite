import Header from '../../components/Header/Header';
import MainSection from '../../components/MainSection/MainSection';
import IntroSection from '../../components/IntroSection/IntroSection';
import AssistantSection from '../../components/AssistantSection/AssistantSection';
import AssistantMessage from '../../components/AssistantMessage/AssistantMessage';
import Footer from '../../components/Footer/Footer';

export default function TeenClubsPage() {
  return (
    <>
      <Header />
      <MainSection>
        <IntroSection>ПОДРОСТКОВЫЕ КЛУБЫ</IntroSection>
        <AssistantSection>
          <AssistantMessage pos_x="left" top={40} right={-50} rotation={170}>
            Предлагаем разнообразные активности и мероприятия для подростков,
            которые помогут развиваться, общаться и находить новых друзей
          </AssistantMessage>
          <AssistantMessage pos_x="right" top={30} left={-50} rotation={15}>
            Присоединяйтесь к нам, чтобы весело и интересно проводить время,
            учиться новому и расширять свой кругозор
          </AssistantMessage>
        </AssistantSection>
        {/* ДОБАВИТЬ */}
      </MainSection>
      <Footer />
    </>
  );
}
