import { useState, useEffect, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import assistantFace from '../../assets/icons/pngs/assistant-face.png';

import classes from './AssistantWidget.module.css';

const mountElement = document.body;

export default function AssistantWidget({ isVisible = false }) {
  const location = useLocation();

  const [showWidget, setShowWidget] = useState(false);
  const [showWidgetDelayed, setShowWidgetDelayed] = useState(false);
  const widgetRef = useRef(null);

  useEffect(() => {
    let timeoutId = null;

    if (isVisible) {
      setShowWidget(true);
      timeoutId = setTimeout(() => {
        setShowWidgetDelayed(true);
      }, 10);
    } else {
      setShowWidgetDelayed(false);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isVisible]);

  const handleTransitionEnd = () => {
    if (!isVisible) {
      setShowWidget(false);
    }
  };

  const scrollWithOffset = (el) => {
    setTimeout(() => {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      window.scrollTo({
        top: el.offsetTop - headerHeight * 3,
        behavior: 'smooth',
      });
    }, 100);
  };

  return createPortal(
    showWidget && (
      <HashLink
        to={
          location.pathname !== '/'
            ? location.pathname + '/#AssistantSection'
            : '/#AssistantSection'
        }
        className={`${classes.assistantWidget} ${showWidgetDelayed ? classes.visible : ''}`}
        onTransitionEnd={handleTransitionEnd}
        ref={widgetRef}
        scroll={scrollWithOffset}
      >
        <img
          src={assistantFace}
          alt="Assistant Face"
          className={classes.assistantPicture}
        />
      </HashLink>
    ),
    mountElement,
  );
}

AssistantWidget.propTypes = {
  isVisible: PropTypes.bool,
};
