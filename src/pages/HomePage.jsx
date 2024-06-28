import React from 'react';
import Header from '../components/Header/Header';
import MainSection from '../components/MainSection/MainSection';
import IntroSection from '../components/IntroSections/IntroSection';
import AssistantSection from '../components/AssistantSection/AssistantSection';
import AssistantMessage from '../components/AssistantMessage/AssistantMessage';
import AssistantButton from '../components/AssistantButton/AssistantButton';
import PictureWithText from '../components/PictureWithText/PictureWithText';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import Footer from '../components/Footer/Footer';

export default function HomePage() {
  const subtitle = 'ОБЕРЕГ';

  return (
    <>
      <Header />
      <MainSection>
        <IntroSection subtitle={subtitle}>Мой семейный центр</IntroSection>
        <AssistantSection>
          <AssistantMessage pos_x="left" bottom="20px" right="-40px" rotation={200}>
            <a>
              Вас приветствует <b>семейный консультант!</b>
            </a>
          </AssistantMessage>
          <AssistantMessage pos_x="left" top="20px" right="-40px" rotation={160}>
            Мы готовы прийти на помощь,
            <br />
            если ваша семья оказалась в <br />
            трудной жизненной ситуации!
          </AssistantMessage>
          <AssistantMessage pos_x="right" top="10px" left="-40px" rotation={20}>
            <a>
              Предлагаю пройти нашу <br />
              <b>интерактивную анкету!</b>
            </a>
          </AssistantMessage>
          <AssistantButton pos_x="left" path="/#ServicesSection">
            Наши услуги
          </AssistantButton>
        </AssistantSection>
        <PictureWithText />
        <ServicesSection />
      </MainSection>
      <Footer />
    </>
  );
}
