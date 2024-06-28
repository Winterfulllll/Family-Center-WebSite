import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';

import classes from './PictureWithText.module.css';

import mainPageImage1 from '/mainPageImage1.png';
import lawyerPageImage1 from '/lawyerPageImage1.jpg';
import mediatorPageImage1 from '/mediatorPageImage1.png';

const images = {
  '/': mainPageImage1,
  '/services/lawyer': lawyerPageImage1,
  '/services/mediator': mediatorPageImage1,
};

function MainPagePictureWithText() {
  return (
    <div className={classes.mainPageTextContainer}>
      <p className={classes.mainPageTextPhrase}>
        Наша главная <br />
        задача - <br />
        поддержка семей <br />с детьми
      </p>
      <HashLink to="/about/#" className={classes.mainPageButton}>
        О нас
      </HashLink>
    </div>
  );
}

function LogopedistPagePictureWithText() {
  return (
    <div className={classes.logopedistPageTextContainer}>
      <div className={classes.logopedistPageTextTitle}>СПЕЦИАЛИСТ</div>
      <div className={classes.logopedistPageTextPhrase}>
        Проведет юридическую консультацию по вопросам семьи и детства
      </div>
    </div>
  );
}

function MediatorPagePictureWithText() {
  return (
    <div className={classes.mediatorPageTextContainer}>
        Помощь специалиста в урегулировании споров и семейных конфликтов
    </div>
  );
}

export default function PictureWithText({ variant = 1 }) {
  const location = useLocation();
  const currentPath =
    '/' + location.pathname.split('/').filter(Boolean).join('/');
  const image = images[currentPath];

  return (
    <div
      className={`${classes[`pictureWithTextContainer-${variant}`]}`}
      style={{
        backgroundImage: image ? `url(${image})` : 'none',
        backgroundColor: image ? 'transparent' : 'rgba(255, 255, 255, 0.5)',
      }}
      id="PictureWithText"
    >
      {currentPath === '/' && <MainPagePictureWithText />}
      {currentPath === '/services/lawyer' && <LogopedistPagePictureWithText />}
      {currentPath === '/services/mediator' && <MediatorPagePictureWithText />}
    </div>
  );
}

PictureWithText.propTypes = {
  changePos: PropTypes.bool,
};
