import classes from './ModalButton.module.css';
import modalButton from '/modal-button.svg';

export default function ModalButton() {
  return (
    <button className={classes.modalButton}>
      <img src={modalButton} alt="Modal Button" />
    </button>
  );
}
