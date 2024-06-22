import classes from './PsychologistSection1.module.css';
import { phychologist } from '../../data';

export default function PsychologistSection1() {
  return (
    <div className={classes.container}>
      {Object.entries(phychologist.phrases).map(([key, phrase]) => (
        <div key={key} className={classes.phrasePsychologist}>
          <a className={classes.textPsychologist}>{phrase}</a>
        </div>
      ))}
    </div>
  );
}
