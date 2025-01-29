import style from './Modal.module.css'
import FormSignUp from '../../FormSignUp/FormSignUp'

function Modal ({closeModal}) {
    function closeModalForm() {
        closeModal(false)
    }

    return (
        <div className={style.backdrop} >
            <div className={style.modal}>
                <FormSignUp/>
                <button onClick={closeModalForm}>close</button>
            </div>
        </div>
    )
}
// onClick={this.closeModal} 

export default Modal
