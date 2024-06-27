import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import classes from './Footer.module.css';

export default function Footer() {
  const controls = useAnimation();
  const location = useLocation();

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

  const scrollWithOffset = (el) => {
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    window.scrollTo({
      top: el.offsetTop - headerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={classes.footer} id="Footer">
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
            <HashLink to="/#" className={classes.footerCenterPartMain}>
              Главная
            </HashLink>
          </motion.div>
          <motion.div variants={variants}>
            {location.pathname === '/' ? (
              <HashLink
                to="#ServicesSection"
                className={classes.footerCenterPartServices}
                scroll={scrollWithOffset}
              >
                Услуги
              </HashLink>
            ) : (
              <Link to="/services" className={classes.footerCenterPartServices}>
                Услуги
              </Link>
            )}
          </motion.div>
          <motion.div variants={variants}>
            <HashLink
              to="/contacts/#"
              className={classes.footerCenterPartContacts}
            >
              Контакты
            </HashLink>
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
              <label className={classes.footerRightPartText}>
                Закажите звонок:
              </label>
              <div className={classes.footerRightPartinputContainer}>
                <input
                  type="text"
                  placeholder="+7 (___) ___-__-__"
                  className={classes.footerRightParInput}
                />
                <button className={classes.footerRightPartButton}>
                  <span className={classes.footerRightPartButtonText}>
                    &#10140;
                  </span>
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
