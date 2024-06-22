import { Link } from 'react-router-dom';

import classes from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerInformation}>
        <div className={classes.footerLeftPart}>
          <div className={classes.footerLeftPartAdress}>
            г.Москва, ул.Азовская,<br/>
            д.33, корп.3
          </div>
          <div className={classes.footerLeftPartNumber}>
            +7 (495) 310-34-00
          </div>
        </div>
        <div className={classes.footerCenterPart}>
          <div className={classes.footerLeftPartMain}>
            Главная
          </div>
          <div className={classes.footerLeftPartServices}>
            Услуги
          </div>
          <div className={classes.footerLeftPartContacts}>
            Контакты
          </div>
          <div className={classes.footerLeftPartCentre}>
            Мойсемейныйцентр.москва
          </div>
        </div>
        <div className={classes.footerRightPart}>
          <div className={classes.footerRightPartCallNumber}>
            <div className={classes.footerRightPartText}>
              Закажите звонок
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          background: 'black',
          height: '2px',
          marginBottom: "3%"
        }}
      />

    </footer>
    
  );
}
