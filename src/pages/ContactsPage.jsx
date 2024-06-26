import Header from '../components/Header/Header';
import MainSection from '../components/MainSection/MainSection';
import IntroSection from '../components/IntroSection/IntroSection';
import AssistantSection from '../components/AssistantSection/AssistantSection';
import AssistantMessage from '../components/AssistantMessage/AssistantMessage';
import ContactsSection from '../components/ContactsSection/ContactsSection';
import Footer from '../components/Footer/Footer';

export default function ContactsPage() {
  return (
    <>
      <Header />
      <MainSection>
        <IntroSection>КОНТАКТЫ</IntroSection>
        <AssistantSection>
          <AssistantMessage pos_x="right" top="0px" left="-40px" rotation={20}>
            Здесь, вы можете увидеть все
            <br />
            наши филиалы, и посмотреть
            <br />
            обстановку в них, нажав
            <br />
            на кнопку <b>панорама</b>
          </AssistantMessage>
        </AssistantSection>
        <ContactsSection />
      </MainSection>
      <Footer />
    </>
  );
}
