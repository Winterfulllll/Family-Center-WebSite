import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';
import ModalButton from '../ModalButton/ModalButton';

import classes from './IntroSection.module.css';

export default function IntroSection({ children }) {
  return (
    <>
      <section className={classes.container}>
        <Logo />
        <div>
          <div className={classes.pageNavigation}>
            <Link to="/" className={classes.pageNavigationMain}>Главная</Link>
            <Link to="/" className={classes.pageNavigationSpace}>-</Link>
            <Link to="/" className={classes.pageNavigationName}>Психолог</Link>
          </div>
          <div className={classes.pageName}>{children.toUpperCase()}</div>
        </div>
        <ModalButton />
      </section>
    </>
  );
}

IntroSection.propTypes = {
  children: PropTypes.node.isRequired,
};
