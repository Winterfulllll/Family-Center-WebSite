import PropTypes from 'prop-types';

import Logo from '../Logo/Logo';
import IntroModalButton from '../IntroModalButton/IntroModalButton';
import IntroPageNavigation from '../IntroPageNavigation/IntroPageNavigation';

import classes from './IntroSection.module.css';

export default function IntroSection({ children, path }) {
  return (
    <section className={classes.container} id='IntroSection'>
      <Logo />
      <div>
        <IntroPageNavigation path={path}>
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
  path: PropTypes.string.isRequired,
};
