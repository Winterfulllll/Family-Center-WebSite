import Header from '../../components/Header/Header';
import MainSection from '../../components/MainSection/MainSection';
import IntroSection from '../../components/IntroSection/IntroSection';
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
          <AssistantMessage
            pos_x="right"
            top={30}
            left={-60}
            rotation={10}
            isLong={true}
            width={600}
          >
            <b>Логопед</b> - специалист, который помогает детям c нарушениями
            речи. Мы предлагаем индивидуальные и групповые занятия, диагностику
            и коррекцию речевых проблем. Наши опытные логопеды помогут вашему
            ребёнку улучшить произношение, расширить словарный запас и развить
            навыки общения
          </AssistantMessage>
        </AssistantSection>
        {/* ДОБАВИТЬ */}
      </MainSection>
      <Footer />
    </>
  );
}
