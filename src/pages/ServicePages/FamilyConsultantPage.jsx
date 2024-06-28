import Header from '../../components/Header/Header';
import MainSection from '../../components/MainSection/MainSection';
import IntroSection from '../../components/IntroSection/IntroSection';
import AssistantSection from '../../components/AssistantSection/AssistantSection';
import AssistantMessage from '../../components/AssistantMessage/AssistantMessage';
import TextBlocksSection from '../../components/TextBlocksSection/TextBlocksSection';
import Footer from '../../components/Footer/Footer';

export default function FamilyConsultantPage() {
  return (
    <>
      <Header />
      <MainSection>
        <IntroSection>СЕМЕЙНЫЙ КОНСУЛЬТАНТ</IntroSection>
        <AssistantSection>
          <AssistantMessage pos_x="right" top={0} left={-40} rotation={20}>
            <b>
              Если ваша семья
              <br />
              оказалась в трудной
              <br />
              жизненной ситуации:
            </b>
          </AssistantMessage>
        </AssistantSection>
        <TextBlocksSection />
      </MainSection>
      <Footer />
    </>
  );
}
