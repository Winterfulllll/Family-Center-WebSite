import { Link } from 'react-router-dom';

import LogoSVG from '../../assets/icons/svgs/msc-logo.svg';
import { useLocation } from 'react-router-dom';
import classes from './Logo.module.css';

export default function Logo() {
  const location = useLocation();
  return location.pathname === '/' ?(
    <Link to="/" className={classes.logoMain}>
      <LogoSVG />
    </Link>
  ) : (
    <Link to="/" className={classes.logo}>
      <LogoSVG />
    </Link>
  )
}
