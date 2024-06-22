import React, { useState } from 'react';

import IntroModalWindow from '../IntroModalWindow/IntroModalWindow';
import ModalButtonSVG from '../../assets/icons/svgs/modal-button.svg';

import classes from './ModalButton.module.css';

export default function ModalButton() {
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
      <IntroModalWindow isOpen={isOpen} />
      <button
        className={`${classes.modalButton} ${isOpen ? classes.open : ''}`}
        onClick={handleClick}
        disabled={isAnimating}
      >
        <ModalButtonSVG />
      </button>
    </>
  );
}
