import style from "./Modal.module.css";
import FormSignUp from "../../FormSignUp/FormSignUp";

function Modal({ closeModal, getName }) {
  function closeModalForm(event) {
    if (event.currentTarget === event.target) {
      closeModal(false);
    }
  }

  return (
    <div className={style.backdrop} onClick={closeModalForm}>
      <div className={style.modal}>
        <FormSignUp getName={getName} closeModal={closeModal}/>
      </div>
    </div>
  );
}

export default Modal;
