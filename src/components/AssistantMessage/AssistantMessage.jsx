import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import classNames from 'classnames';

import TriangleSVG from '../../assets/icons/svgs/triangle.svg';

import classes from './AssistantMessage.module.css';

export default function AssistantMessage({
  children,
  link = null,
  rotation,
  top,
  bottom,
  left,
  right,
  hide = false,
}) {
  const triangleStyles = {};

  const addStyle = (prop, value) => {
    if (value !== undefined) {
      triangleStyles[prop] = value;
    }
  };

  addStyle('transform', rotation && `rotate(${rotation}deg)`);
  addStyle('top', top);
  addStyle('bottom', bottom);
  addStyle('left', left);
  addStyle('right', right);

  return (
    <div className={classes.assistantMessageContainer}>
      {!hide && (
        <TriangleSVG
          className={classes.assistantMessageTriangle}
          style={triangleStyles}
        />
      )}
      {link ? (
        <HashLink
          to={link}
          className={classNames(
            classes.assistantMessageChat,
            classes.assistantMessageLinkedChat,
          )}
        >
          {children}
        </HashLink>
      ) : (
        <div className={classes.assistantMessageChat}>{children}</div>
      )}
    </div>
  );
}

AssistantMessage.propTypes = {
  children: PropTypes.node.isRequired,
  rotation: PropTypes.number,
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
