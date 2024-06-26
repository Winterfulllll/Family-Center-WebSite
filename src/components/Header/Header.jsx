import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import classes from './Header.module.css';
import SoundSwitchButton from '../SoundSwitchButton/SoundSwitchButton';

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.header2}>
        <div className={classes.headerAddress}>
          г.Москва, ул.Азовская, д.33, корп.3
        </div>
        <div className={classes.header3}>
          <div className={classes.headerPhone}>+7 (495) 310-34-00</div>
          <div className={classes.headerContacts}>
            <Link to="/contacts">Контакты</Link>
          </div>
          <SoundSwitchButton className={classes.soundSwitchButton}/>
        </div>
      </div>
    </header>
  );
}
