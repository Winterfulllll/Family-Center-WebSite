import classes from './Header.module.css';

export default function Header() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.headerAddress}>
          г.Москва, ул.Азовская, д.33, корп.3
        </div>
        <div className={classes.headerPhone}>+7 (495) 310-34-00</div>
        <div className={classes.headerContacts}>
          <a href="">Контакты</a>
        </div>
      </header>
    </>
  );
}
