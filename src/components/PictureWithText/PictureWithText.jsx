import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import classes from './PictureWithText.module.css';

import mainPageImage1 from '/mainPageImage1.png';
// import image2 from '../../путь/к/другому/изображению.jpg';

const images = {
  '/': mainPageImage1,
  // ...
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

export default function PictureWithText() {
  const location = useLocation();
  const image = images[location.pathname];

  return (
    <div
      className={classes.pictureWithTextContainer}
      style={{
        backgroundImage: image ? `url(${image})` : 'none',
        backgroundColor: image ? 'transparent' : 'rgba(255, 255, 255, 0.5)',
      }}
      id="PictureWithText"
    >
      {location.pathname === '/' && <MainPagePictureWithText />}
    </div>
  );
}
