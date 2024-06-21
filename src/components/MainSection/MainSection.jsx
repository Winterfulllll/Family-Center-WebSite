import PropTypes from 'prop-types';

import classes from './MainSection.module.css';

export default function MainSection({ children }) {
  return <div className={classes.mainSection}>{children}</div>;
}

MainSection.propTypes = {
  children: PropTypes.isRequired,
};
