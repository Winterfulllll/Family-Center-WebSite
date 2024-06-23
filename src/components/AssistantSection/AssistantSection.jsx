import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import assistantAnimation from '/assistant-animation.webm';

import classes from './AssistantSection.module.css';
import AssistantWidget from '../AssistantWidget/AssistantWidget';

export default function AssistantSection({ children }) {
  const videoRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    const video = videoRef.current;

    if (inView && !hasPlayed) {
      setHasPlayed(true);
      video.currentTime = 0;
      video.play();
    } else if (!inView) {
      setHasPlayed(false);
      video.pause();
      video.currentTime = 0;
    }
  }, [inView, hasPlayed]);

  const getChildrenByPos = (pos) => {
    return React.Children.toArray(children).filter(
      (child) => child.props.pos_x === pos
    );
  };

  return (
    <>
      <AssistantWidget isVisible={!inView} />
      <section ref={ref} className={classes.container} id="AssistantSection">
        <div className={classes.leftSide}>{getChildrenByPos('left')}</div>
        <video
          ref={videoRef}
          className={classes.assistantConstainer}
          muted
          width="100"
          onClick={() => videoRef.current.play()}
        >
          <source src={assistantAnimation} type="video/webm" />
        </video>
        <div className={classes.rightSide}>{getChildrenByPos('right')}</div>
      </section>
    </>
  );
}
