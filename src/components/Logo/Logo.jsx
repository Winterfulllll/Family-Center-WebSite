import classes from './Logo.module.css';
import logo from '/msc-logo.svg';

export default function Logo() {
  return (
    <a href={import.meta.env.BASE_URL} className={classes.logo}>
      <img src={logo} alt="logo"/>
    </a>
  );
}
