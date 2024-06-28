import Header from '../../components/Header/Header';
import MainSection from '../../components/MainSection/MainSection';
import IntroSection from '../../components/IntroSection/IntroSection';
import AssistantSection from '../../components/AssistantSection/AssistantSection';
import AssistantMessage from '../../components/AssistantMessage/AssistantMessage';
import PictureWithText from '../../components/PictureWithText/PictureWithText';
import Footer from '../../components/Footer/Footer';

export default function MediatorPage() {
  return (
    <>
      <Header />
      <MainSection>
        <IntroSection>МЕДИАТОР</IntroSection>
        <AssistantSection>
          <AssistantMessage
            pos_x="right"
            top={50}
            left={-60}
            rotation={10}
            isLong={true}
            width={600}
          >
            <b>Медиатор поможет:</b>
            <ul>
              <li>При конфликтах с близкими и родными;</li>
              <li>При конфликтах в ситуации бракоразводного процесса;</li>
              <li>
                По вопросам воспитания, порядка общения и проживания детей;
              </li>
              <li>При нарушенных детско-родительских отношениях.</li>
            </ul>
          </AssistantMessage>
        </AssistantSection>
        <PictureWithText variant={3} />
      </MainSection>
      <Footer />
    </>
  );
}
