import Logo from '../Logo/Logo';
import ModalButton from '../ModalButton/ModalButton';

import classes from './IntroSection.module.css';

export default function IntroSection({ children }) {
  return (
    <>
      <section className={classes.container}>
        <Logo />
        <div className={classes.pageName}>{children.toUpperCase()}</div>
        <ModalButton />
      </section>
    </>
  );
}
