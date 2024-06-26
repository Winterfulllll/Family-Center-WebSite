import React from 'react';
import Header from '../components/Header/Header';
import MainSection from '../components/MainSection/MainSection';
import IntroSection from '../components/IntroSections/IntroSection';
import AssistantSection from '../components/AssistantSection/AssistantSection';
import AssistantMessage from '../components/AssistantMessage/AssistantMessage';
import Footer from '../components/Footer/Footer';
import ButtonService from '../components/ButtonForService/ButtonForService';
import Photo_phrase from '../components/Photo+phrase/Photo+phrase';
import OursServices from '../components/OursServices/OursServices';

export default function HomePage() {
  const subtitle = "ОБЕРЕГ";
  return (
    <>
      <Header />
      <MainSection>
        <IntroSection subtitle={subtitle}>Мой семейный центр</IntroSection>
        <AssistantSection>
          <AssistantMessage pos_x="left" pos_y="top">
            <a>Вас приветствует <b>семейный консультант!</b></a>
          </AssistantMessage>
          <AssistantMessage pos_x="left" pos_y="center">
            Мы готовы прийти на помощь,<br /> 
            если ваша семья оказалась в <br /> 
            трудной жизненной ситуации!
          </AssistantMessage>
          <AssistantMessage pos_x="right" pos_y="center">
            <a>Предлагаю пройти нашу <br /> 
            <b>интерактивную анкету!</b></a>
          </AssistantMessage>
          <ButtonService pos_x="left" ></ButtonService>
        </AssistantSection>
        <Photo_phrase />
        <OursServices />
      </MainSection>
      <Footer />
    </>
  );
}
