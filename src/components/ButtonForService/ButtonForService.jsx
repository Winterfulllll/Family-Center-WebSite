import { Link } from 'react-router-dom';

import classes from './ButtonForService.module.css';


export default function ButtonService() {
    return (
        <button className={classes.button}>
            Наши услуги
        </button>
    );
  }