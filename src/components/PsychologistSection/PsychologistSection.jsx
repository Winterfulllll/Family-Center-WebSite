import classes from './PsychologistSection.module.css';

import { phychologist } from '../../data';

export default function PsychologistSection() {
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
