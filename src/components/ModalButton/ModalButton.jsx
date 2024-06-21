import classes from './ModalButton.module.css';
import ModalButtonSVG from '../../assets/icons/svgs/modal-button.svg';

export default function ModalButton() {
  return (
    <button className={classes.modalButton}>
      <ModalButtonSVG />
    </button>
  );
}
