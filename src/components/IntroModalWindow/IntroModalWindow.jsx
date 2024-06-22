import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';

import classes from './IntroModalWindow.module.css';

const mountElement = document.getElementById('overlays');

export default function IntroModalWindow({ isOpen = false }) {
  const [showModal, setShowModal] = useState(false);
  const overlayRef = useRef(mountElement);
  let openTimeoutId = null;
  let closeTimeoutId = null;

  useEffect(() => {
    const overlay = overlayRef.current;

    if (isOpen) {
      setShowModal(true);
      document.body.style.overflow = 'hidden';
      overlay.style.display = 'flex';
      openTimeoutId = setTimeout(() => {
        overlay.classList.add('open');
      }, 10);
    } else {
      overlay.classList.remove('open');
      closeTimeoutId = setTimeout(() => {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
        setShowModal(false);
      }, 500);
    }

    return () => {
      clearTimeout(openTimeoutId);
      clearTimeout(closeTimeoutId);
    };
  }, [isOpen]);

  return createPortal(
    showModal && (
      <div className={classes.modalWindowWrapper}>
        <div className={classes.modalWindow}>
          <div className={classes.modalWindowCenterName}>
            Мой семейный центр «Оберег»
          </div>
          <div className={classes.modalWindowPhone}>+7 (495) 310-34-00</div>
          <div className={classes.headerAddress}>
            г.Москва, ул.Азовская, д.33, корп.3
          </div>
          <Link to="/contacts" className={classes.headerMainPage}>
            Главная
          </Link>
          <div className={classes.headerPages}>
            <Link to="/about" className={classes.headerAbout}>
              О нас
            </Link>
            <Link to="/services" className={classes.headerServices}>
              Услуги
            </Link>
            <Link to="/contacts" className={classes.headerContacts}>
              Контакты
            </Link>
            <Link
              to="https://мойсемейныйцентр.москва/"
              className={classes.headerContacts}
            >
              Мойсемейныйцентр.москва
            </Link>
          </div>
        </div>
      </div>
    ),
    overlayRef.current,
  );
}

IntroModalWindow.propTypes = {
  isOpen: PropTypes.bool,
};
