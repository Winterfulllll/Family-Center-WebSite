import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import classes from './IntroPageNavigation.module.css';

export default function IntroPageNavigation({ children, path }) {
  return (
    <div className={classes.pageNavigation}>
      <Link to="/" className={classes.pageNavigationMain}>
        Главная
      </Link>
      <div className={classes.pageNavigationSpace}>-</div>
      <Link to={path} className={classes.pageNavigationName}>
        {children}
      </Link>
    </div>
  );
}

IntroPageNavigation.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
};
