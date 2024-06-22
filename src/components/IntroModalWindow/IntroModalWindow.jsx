import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';

import classes from './IntroModalWindow.module.css';

const mountElement = document.getElementById('overlays');

export default function IntroModalWindow({ isOpen = true }) {
  const [showModal, setShowModal] = useState(false);
  const overlayRef = useRef(mountElement);

  useEffect(() => {
    const overlay = overlayRef.current;

    if (isOpen) {
      setShowModal(true);
      document.body.style.overflow = 'hidden';
      overlay.style.display = 'flex';
      setTimeout(() => {
        overlay.classList.add('open');
      }, 10);
    } else {
      overlay.classList.remove('open');
      setTimeout(() => {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
        setShowModal(false);
      }, 500);
    }
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
