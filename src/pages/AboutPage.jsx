import Header from '../components/Header/Header';
import MainSection from '../components/MainSection/MainSection';
import IntroSection from '../components/IntroSection/IntroSection';
import AssistantSection from '../components/AssistantSection/AssistantSection';
import AssistantMessage from '../components/AssistantMessage/AssistantMessage';
import Footer from '../components/Footer/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <MainSection>
        <IntroSection>О НАШЕМ ЦЕНТРЕ</IntroSection>
        <AssistantSection>
          <AssistantMessage pos_x="left" top={40} right={-50} rotation={170}>
            Наше учреждение зажгло свой фонарь надежды в <b>2002 году</b> и с
            тех пор стало маяком для многих семей
          </AssistantMessage>
          <AssistantMessage pos_x="right" top={30} left={-50} rotation={15}>
            В сердце Москвы, среди шума большого города, есть место, где тепло и
            светло. <br /> И это место - <b>Мой семейный центр «Оберег»</b>
          </AssistantMessage>
        </AssistantSection>
        {/* ДОБАВИТЬ */}
      </MainSection>
      <Footer />
    </>
  );
}
