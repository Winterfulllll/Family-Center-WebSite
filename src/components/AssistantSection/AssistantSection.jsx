import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import assistantAnimation from '/assistant-animation.webm';
import AssistantMessage from '../AssistantMessage/AssistantMessage';

import classes from './AssistantSection.module.css';
import AssistantWidget from '../AssistantWidget/AssistantWidget';

export default function AssistantSection() {
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

  return (
    <>
      <AssistantWidget isVisible={!inView} />
      <section ref={ref} className={classes.container} id="AssistantSection">
        <video
          ref={videoRef}
          className={classes.assistantConstainer}
          muted
          width="100"
          onClick={() => videoRef.current.play()}
        >
          <source src={assistantAnimation} type="video/webm" />
        </video>
        <AssistantMessage pos_x="right" pos_y="center">
          Психолог поможет:
        </AssistantMessage>
      </section>
    </>
  );
}
