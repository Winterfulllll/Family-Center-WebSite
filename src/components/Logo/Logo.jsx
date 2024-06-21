import { Link } from 'react-router-dom';

import LogoSVG from '../../assets/icons/svgs/msc-logo.svg';

import classes from './Logo.module.css';

export default function Logo() {
  return (
    <Link to="/other" className={classes.logo}>
      <LogoSVG />
    </Link>
  );
}
