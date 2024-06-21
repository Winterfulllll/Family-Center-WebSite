import { Link } from 'react-router-dom';

import logo from '/msc-logo.svg';

import classes from './Logo.module.css';

export default function Logo() {
  return (
    <Link to="/other" className={classes.logo}>
      <img src={logo} alt="logo" />
    </Link>
  );
}
