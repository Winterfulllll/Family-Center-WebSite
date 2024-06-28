import React from 'react';
import Header from '../components/Header/Header';
import MainSection from '../components/MainSection/MainSection';
import IntroSection from '../components/IntroSection/IntroSection';
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
        <AssistantSection link="/survey/#">
          <AssistantMessage pos_x="left" bottom={20} right={-40} rotation={200}>
            Вас приветствует <b>семейный консультант!</b>
          </AssistantMessage>
          <AssistantMessage pos_x="left" top={20} right={-40} rotation={160}>
            Мы готовы прийти на помощь,
            <br />
            если ваша семья оказалась в
            <br />
            трудной жизненной ситуации!
          </AssistantMessage>
          <AssistantMessage
            link="/survey/#"
            pos_x="right"
            top={10}
            left={-40}
            rotation={20}
          >
            Предлагаю пройти нашу
            <br />
            <b>интерактивную анкету!</b>
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
