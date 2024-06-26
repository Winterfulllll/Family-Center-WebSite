import { Link } from 'react-router-dom';

import classes from './Photo+phrase.module.css';

export default function Photo_phrase() {
    return (
        <div className={classes.mainPhotoAndPhrase}>
            <div className={classes.Phrase}>
                <p className={classes.TextPrase}>
                Наша главная <br />
                задача - <br />
                поддержка семей <br />
                с детьми
                </p>
                <button className={classes.button}>
                    О нас
                </button>
            </div>
        </div>
    );
}