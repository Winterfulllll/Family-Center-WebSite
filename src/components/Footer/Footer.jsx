import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import classes from './Footer.module.css';

export default function Footer() {
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
        duration: 0.6,
        ease: 'easeInOut',
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <footer className={classes.footer}>
      <div className={classes.footerInformation}>
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          className={classes.footerLeftPart}
        >
          <motion.div
            variants={variants}
            className={classes.footerLeftPartAdress}
          >
            г.Москва, ул.Азовская,
            <br />
            д.33, корп.3
          </motion.div>
          <motion.div
            variants={variants}
            className={classes.footerLeftPartNumber}
          >
            +7 (495) 310-34-00
          </motion.div>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          animate={controls}
          className={classes.footerCenterPart}
        >
          <motion.div variants={variants}>
            <Link to="/" className={classes.footerCenterPartMain}>
              Главная
            </Link>
          </motion.div>
          <motion.div variants={variants}>
            <Link to="/services" className={classes.footerCenterPartServices}>
              Услуги
            </Link>
          </motion.div>
          <motion.div variants={variants}>
            <Link to="/contacts" className={classes.footerCenterPartContacts}>
              Контакты
            </Link>
          </motion.div>
          <motion.div variants={variants}>
            <Link
              to="https://мойсемейныйцентр.москва/"
              className={classes.footerCenterPartCentre}
            >
              Мойсемейныйцентр.москва
            </Link>
          </motion.div>
        </motion.div>
        <motion.div className={classes.footerRightPart}>
          <motion.div
            variants={variants}
            initial="hidden"
            animate={controls}
            className={classes.footerRightPartCallNumber}
          >
            <div className={classes.footerRightPartCallNumber}>
              <label className={classes.footerRightPartText}>Закажите звонок:</label>
              <div className={classes.footerRightPartinputContainer}>
                <input
                  type="text"
                  placeholder="+7 (___) ___-__-__"
                  className={classes.footerRightParInput}
                />
                <button className={classes.footerRightPartButton}>
                  <span className={classes.footerRightPartButtonText}>&#10140;</span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className={classes.bottomLine} />
    </footer>
  );
}
