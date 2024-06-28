import { HashLink } from 'react-router-hash-link';
import React, { useEffect } from 'react';

import classes from './Header.module.css';
import SoundSwitchButton from '../SoundSwitchButton/SoundSwitchButton';

export default function Header() {
  return (
    <header className={classes.header} id="Header">
      <div className={classes.header2}>
        <div className={classes.headerAddress}>
          г.Москва, ул.Азовская, д.33, корп.3
        </div>
        <div className={classes.header3}>
          <div className={classes.headerPhone}>+7 (495) 310-34-00</div>
          <div className={classes.headerContacts}>
            <HashLink to="/contacts/#">Контакты</HashLink>
          </div>
          <SoundSwitchButton className={classes.soundSwitchButton} />
        </div>
      </div>
    </header>
  );
}
