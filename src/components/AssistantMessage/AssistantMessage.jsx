import PropTypes from 'prop-types';
import classNames from 'classnames';

import TriangleSVG from '../../assets/icons/svgs/triangle.svg';

import classes from './AssistantMessage.module.css';

const validPositions = {
  x: ['left', 'center', 'right'],
  y: ['top', 'center', 'bottom'],
};

export default function AssistantMessage({
  children,
  pos_x = 'center',
  pos_y = 'center',
}) {
  const containerClassNames = classNames(
    classes.container,
    classes[`y-${pos_y}`],
  );
  const triangleClassNames = classNames(
    classes.triangle,
    classes[`${pos_x}-${pos_y}`],
  );
  const chatBubbleClassNames = classNames(
    classes.chatBubble,
    classes[`x-${pos_x}`],
  );

  return (
    <div className={classes.container}>
      {/* {pos_x !== 'center' && <TriangleSVG className={triangleClassNames} />} */}
      <div className={classes.chatBubble}>{children}</div>
    </div>
  );
}

AssistantMessage.propTypes = {
  children: PropTypes.node.isRequired,
  pos_x: PropTypes.oneOf(validPositions.x).isRequired,
  pos_y: PropTypes.oneOf(validPositions.y).isRequired,
};
