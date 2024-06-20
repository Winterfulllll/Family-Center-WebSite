import classes from './Header.module.css';

export default function Header() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.headerAddress}>
          Москва, Ул.Азовская, д.33, корп.3
        </div>
        <div className={classes.headerPhone}>
          +74953103400
        </div>
        <div className={classes.headerContacts}>
          <a href="">Контакты</a>
        </div>
      </header>
    </>
  );
}
