import Header from '../../components/Header/Header';
import MainSection from '../../components/MainSection/MainSection';
import IntroSection from '../../components/IntroSections/IntroSection';
import AssistantSection from '../../components/AssistantSection/AssistantSection';
import Footer from '../../components/Footer/Footer';

import './HomePage.css';

export default function HomePage() {
  return (
    <>
      <Header />
      <MainSection>
        <IntroSection>ПСИХОЛОГ</IntroSection>
        <AssistantSection />
        <div className='mainPhrasePsicholog'>
          <div className='PhrasePsicholog1'>
            <a classname="textPsicholog">
              Понять причины стрессовых состояний, справиться с ними
            </a>
          </div>
          <div className='PhrasePsicholog1'>
            <a classname="textPsicholog">
              Сформировать реалистичную, позитивную и устойчивую самооценку
            </a>
          </div>
          <div className='PhrasePsicholog1'>
            <a classname="textPsicholog">
              Открыть свой потенциал и реализовать жизненные планы
            </a>
          </div>
          <div className='PhrasePsicholog1'>
            <a classname="textPsicholog">
              Преодолеть трудности и кризисы, адаптироваться к изменениям
            </a>
          </div>
          <div className='PhrasePsicholog1'>
            <a classname="textPsicholog">
              Находить выходы из конфликтов, решать проблемы и достигать цели
            </a>
          </div>
          <div className='PhrasePsicholog1'>
            <a classname="textPsicholog">
              Налаживать взаимоотношения с окружающими
            </a>
          </div>
          <div className='PhrasePsicholog1'>
            <a classname="textPsicholog">
              Научиться эффективно общаться и выражать свои эмоции
            </a>
          </div>
        </div>
      </MainSection>
      <Footer />
    </>
  );
}
