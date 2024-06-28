import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';

import assistantAnimation from '/assistant-animation.webm';

import classes from './AssistantSection.module.css';
import AssistantWidget from '../AssistantWidget/AssistantWidget';

export default function AssistantSection({ children, link = null }) {
  const videoRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.5,
  });
  const { ref: sectionRef2, inView: sectionInView2 } = useInView({
    threshold: 0.01,
  });

  useEffect(() => {
    const video = videoRef.current;

    if (sectionInView && !hasPlayed) {
      setHasPlayed(true);
      video.currentTime = 0;
      video.play();
    } else if (!sectionInView) {
      setHasPlayed(false);
      video.pause();
      video.currentTime = 0;
    }
  }, [sectionInView, hasPlayed]);

  const getChildrenByPos = (pos) => {
    return React.Children.toArray(children).filter(
      (child) => child.props.pos_x === pos,
    );
  };

  const leftSideChildren = getChildrenByPos('left');
  const rightSideChildren = getChildrenByPos('right');

  return (
    <>
      <AssistantWidget isVisible={!sectionInView2} />
      <section
        ref={(el) => {
          sectionRef(el);
          sectionRef2(el);
        }}
        className={classes.container}
        id="AssistantSection"
        style={
          leftSideChildren.length && rightSideChildren.length
            ? { justifyContent: 'space-around' }
            : { justifyContent: 'center' }
        }
      >
        {leftSideChildren.length > 0 && (
          <div className={classes.leftSide}>{leftSideChildren}</div>
        )}
        {link ? (
          <HashLink to={link} className={classes.assistantLinkedConstainer}>
            <video
              ref={videoRef}
              className={classes.assistantConstainer}
              muted
              width="100"
            >
              <source src={assistantAnimation} type="video/webm" />
            </video>
          </HashLink>
        ) : (
          <video
            ref={videoRef}
            className={classes.assistantConstainer}
            muted
            width="100"
            onClick={() => videoRef.current.play()}
            style={{
              marginLeft: rightSideChildren.length ? 0 : 100,
              marginRight: leftSideChildren.length ? 0 : 100,
            }}
          >
            <source src={assistantAnimation} type="video/webm" />
          </video>
        )}
        {rightSideChildren.length > 0 && (
          <div className={classes.rightSide}>{rightSideChildren}</div>
        )}
      </section>
    </>
  );
}

AssistantSection.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string,
};
