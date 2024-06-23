import { useState, useEffect, useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
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

  return createPortal(
    showWidget && (
      <Link
        to={`${location.pathname}/#`}
        className={`${classes.assistantWidget} ${showWidgetDelayed ? classes.visible : ''}`}
        onTransitionEnd={handleTransitionEnd}
        ref={widgetRef}
      >
        <img
          src={assistantFace}
          alt="Assistant Face"
          className={classes.assistantPicture}
        />
      </Link>
    ),
    mountElement,
  );
}

AssistantWidget.propTypes = {
  isVisible: PropTypes.bool,
};
