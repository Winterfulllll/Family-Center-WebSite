import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
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
      <div className={classes.modalWindow}>
        <div>МОДАЛЬНОЕ ОКНО</div>
      </div>
    ),
    overlayRef.current,
  );
}

IntroModalWindow.propTypes = {
  isOpen: PropTypes.bool,
};
