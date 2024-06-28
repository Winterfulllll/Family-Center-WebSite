import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import classes from './TextBlocksSection.module.css';

import { phychologistTexts, familyConsultantTexts } from '../../data';

export default function TextBlocksSection() {
  const location = useLocation();
  const currentPath =
    '/' + location.pathname.split('/').filter(Boolean).join('/');

  let data = [];
  if (currentPath === '/services/psychologist') {
    data = phychologistTexts;
  } else if (currentPath === '/services/family-consultant') {
    data = familyConsultantTexts;
  }

  const createMarkup = (text) => {
    return { __html: text };
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={classes.textBlocksSectionContainer}
      variants={variants}
      initial="hidden"
      animate={controls}
    >
      {data.map((phrase, index) => (
        <motion.div
          key={index}
          className={classes.textBlocksSectionTextContainer}
          variants={variants}
        >
          <div className={classes.textBlocksSectionText}>
            {phrase.split('\n').map((line, lineIndex) => (
              <div
                key={lineIndex}
                dangerouslySetInnerHTML={createMarkup(line)}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
