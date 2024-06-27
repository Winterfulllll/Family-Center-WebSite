import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import LogoSVG from '../../assets/icons/svgs/msc-logo.svg';
import classes from './Logo.module.css';

export default function Logo() {
  const location = useLocation();

  return (
    <Link
      to="/"
      className={location.pathname === '/' ? classes.logoMain : classes.logo}
    >
      <LogoSVG />
    </Link>
  );
}
