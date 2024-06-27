import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';

import classes from './AssistantButton.module.css';

export default function AssistantButton({ children, path }) {
  const location = useLocation();

  const scrollWithOffset = (el) => {
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    window.scrollTo({
      top: el.offsetTop - headerHeight,
      behavior: 'smooth',
    });
  };

  return location.pathname === '/' ? (
    <HashLink
      to={path}
      className={classes.assistant_button}
      scroll={scrollWithOffset}
    >
      {children}
    </HashLink>
  ) : (
    <Link to={path} className={classes.assistant_button}>
      {children}
    </Link>
  );
}

AssistantButton.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
};
