import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import Logo from '../Logo/Logo';
import IntroModalButton from '../IntroModalButton/IntroModalButton';
import IntroPageNavigation from '../IntroPageNavigation/IntroPageNavigation';

import classes from './IntroSection.module.css';

export default function IntroSection({ children, subtitle = null }) {
  const location = useLocation();

  return location.pathname === '/' ? (
    <section className={classes.mainPageContainer}>
      <Logo />
      <div className={classes.mainPageFullName}>
        <div>
          <div className={classes.mainPageName}>{children.toUpperCase()}</div>
        </div>
        <div>
          <div className={classes.mainPageName2}>{subtitle.toUpperCase()}</div>
        </div>
      </div>
      <IntroModalButton />
    </section>
  ) : (
    <section className={classes.container}>
      <Logo />
      <div>
        <IntroPageNavigation path={location.pathname}>
          {children.charAt(0).toUpperCase() + children.slice(1).toLowerCase()}
        </IntroPageNavigation>
        <div
          className={
            children.length > 13 ? classes.longPageName : classes.pageName
          }
        >
          {children.toUpperCase()}
        </div>
      </div>
      <IntroModalButton />
    </section>
  );
}

IntroSection.propTypes = {
  children: PropTypes.node.isRequired,
};
