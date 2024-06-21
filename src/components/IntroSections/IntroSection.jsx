import PropTypes from 'prop-types';

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
            <div className={classes.pageNavigationMain}>
              Главная
            </div>
            <div className={classes.pageNavigationSpace}>
              -
            </div>
            <div className={classes.pageNavigationName}>
              Психолог
            </div>
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
