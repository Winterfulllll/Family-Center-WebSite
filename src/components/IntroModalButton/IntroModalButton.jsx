import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import IntroModalWindow from '../IntroModalWindow/IntroModalWindow';
import IntroModalButtonSVG from '../../assets/icons/svgs/intro-modal-button.svg';

import classes from './IntroModalButton.module.css';

export default function IntroModalButton() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setIsOpen(!isOpen);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <>
      <IntroModalWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <button
        className={`${location.pathname === '/' ? classes.introModalButtonMain : classes.introModalButton} ${isOpen ? classes.open : ''}`}
        onClick={handleClick}
        disabled={isAnimating}
      >
        <IntroModalButtonSVG />
      </button>
    </>
  );
}
