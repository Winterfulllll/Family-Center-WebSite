import PropTypes from 'prop-types';

import Logo from '../Logo/Logo';
import IntroModalButton from '../IntroModalButton/IntroModalButton';
import IntroPageNavigation from '../IntroPageNavigation/IntroPageNavigation';
import { useLocation } from 'react-router-dom';

import classes from './IntroSection.module.css';

export default function IntroSection({ children }) {
  const location = useLocation();

  return location.pathname === '/' ? (
    <section className={classes.mainPagecontainer} id="IntroSection">
      <Logo />
      <div>
        <div className={classes.mainPageName}>{children.toUpperCase()}</div>
      </div>
      <IntroModalButton />
    </section>
  ) : (
    <section className={classes.container} id="IntroSection">
      <Logo />
      <div>
        <IntroPageNavigation>
          {children.charAt(0).toUpperCase() + children.slice(1).toLowerCase()}
        </IntroPageNavigation>
        <div className={classes.pageName}>{children.toUpperCase()}</div>
      </div>
      <IntroModalButton />
    </section>
  );
}

IntroSection.propTypes = {
  children: PropTypes.node.isRequired,
};
