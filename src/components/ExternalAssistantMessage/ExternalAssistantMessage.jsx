import PropTypes from 'prop-types';

import TriangleSVG from '../../assets/icons/svgs/triangle.svg';

import classes from './ExternalAssistantMessage.module.css';

export default function ExternalAssistantMessage({ children }) {
  return (
    <div className={classes.externalAssistantMessageContainer}>
      <TriangleSVG className={classes.externalAssistantMessageTriangle} />
      <div className={classes.externalAssistantMessageText}>{children}</div>
    </div>
  );
}

ExternalAssistantMessage.propTypes = {
  children: PropTypes.node.isRequired,
};
