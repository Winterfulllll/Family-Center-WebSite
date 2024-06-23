import React, { useState } from 'react';

import IntroModalWindow from '../IntroModalWindow/IntroModalWindow';
import IntroModalButtonSVG from '../../assets/icons/svgs/intro-modal-button.svg';
import { useLocation } from 'react-router-dom';

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

  return location.pathname === '/' ?(
    <>
      <IntroModalWindow isOpen={isOpen} />
      <button
        className={`${classes.introModalButtonMain} ${isOpen ? classes.open : ''}`}
        onClick={handleClick}
        disabled={isAnimating}
      >
        <IntroModalButtonSVG />
      </button>
    </>
  ) : (
    <>
      <IntroModalWindow isOpen={isOpen} />
      <button
        className={`${classes.introModalButton} ${isOpen ? classes.open : ''}`}
        onClick={handleClick}
        disabled={isAnimating}
      >
        <IntroModalButtonSVG />
      </button>
    </>
  )
}
