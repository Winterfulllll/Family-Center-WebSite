import { Link } from 'react-router-dom';

import classes from './ContactsSection.module.css';

import { branches } from '../../data';

export default function ContactsSection() {
  return (
    <div className={classes.contactsSectionContainer} id="ContactsSection">
      {branches.map((branch, index) => (<div className={classes.branchContainer}>
        <div key={index} className={classes.branchNameRow}>{branch.name}</div>
        <div className={classes.branchRow}>
          <div className={classes.branchColLeftSide}>
            <div className={classes.branchSimpleText}>Адрес:</div>
            <div className={classes.branchAddress}>{branch.address}</div>
            <div className={classes.branchSimpleText}>Время работы:</div>
            <div className={classes.branchWorkHours}>
              {branch.workHours.split('\n').map((line, index) => (
                <div key={index}>
                  {line}
                  <br />
                </div>
              ))}
            </div>
            <div className={classes.branchSimpleText}>E-mail:</div>
            <div className={classes.branchEmail}>{branch.email}</div>
          </div>
          <div className={classes.branchColRightSide}>
            <div className={classes.branchSimpleText}>Телефон:</div>
            <div className={classes.branchPhone}>{branch.phone}</div>
            <div className={classes.branchButtons}>
              <Link
                to={branch.panoramaLink}
                className={classes.branchPanoramaButton}
              >
                Панорама
              </Link>
              <Link
                to={branch.routeLink}
                className={classes.branchRouteButton}
              >
                Маршрут
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.bottomLine} />
      </div>))}
      <div className={classes.branchMapContainer}></div>
    </div>
  );
}
