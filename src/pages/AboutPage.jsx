import Header from '../components/Header/Header';
import MainSection from '../components/MainSection/MainSection';
import IntroSection from '../components/IntroSection/IntroSection';
import AssistantSection from '../components/AssistantSection/AssistantSection';
import AssistantMessage from '../components/AssistantMessage/AssistantMessage';
import QuoteSection from '../components/QuoteSection/QuoteSection';
import ExternalAssistantMessage from '../components/ExternalAssistantMessage/ExternalAssistantMessage';
import Footer from '../components/Footer/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <MainSection>
        <IntroSection>О НАШЕМ ЦЕНТРЕ</IntroSection>
        <QuoteSection>
          Мы - Мой семейный центр «Оберег» - это не просто учреждение,
          <br />
          мы - это семья, которая каждый день растёт и становится сильнее и все,
          <br />
          кто приходит к нам, становятся неотъемлемой её частью!
        </QuoteSection>
        <AssistantSection>
          <AssistantMessage pos_x="left" top={40} right={-50} rotation={160}>
            Наше учреждение зажгло свой фонарь надежды в 2002 году и с тех пор
            стало маяком для многих семей
          </AssistantMessage>
          <AssistantMessage pos_x="right" top={30} left={-50} rotation={15}>
            В сердце Москвы, среди шума большого города, есть место, где тепло и
            светло. И это место - Мой семейный центр «Оберег»
          </AssistantMessage>
        </AssistantSection>
        <ExternalAssistantMessage>
          Здесь, в стенах нашего Центра, время не стоит на месте. Оно течёт в
          ритме сердец тех, кто приходит к<br /> нам за помощью. Мы видели
          множество историй: от радостных моментов воссоединения семей до
          <br /> слёз благодарности.
        </ExternalAssistantMessage>
        {/* ДОБАВИТЬ */}
      </MainSection>
      <Footer />
    </>
  );
}
