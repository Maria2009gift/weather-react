
import style from './FormSignUp.module.css'
import Modal from '../Elements/Modal/Modal'

function FormSignUp() {

    return (
        <>
            <h2 className={style.title_signup}>Sign Up</h2>
            <form action="">
                <label className={style.container_input}>
                    <p className={style.minititle_signup}>Username</p>
                    <input type="text" className={style.input_signup} placeholder='Username'/>
                </label>
                <label className={style.container_input}>
                    <p className={style.minititle_signup}>E-Mail</p>
                    <input type="text" className={style.input_signup} placeholder='E-Mail'/>
                </label>
                <label className={style.container_input}>
                    <p className={style.minititle_signup}>Password</p>
                    <input type="text" className={style.input_signup} placeholder='Password'/>
                </label>
                <button type="submit" className={style.signup}>Sign Up</button>
            </form>
        </>
    )

}

export default FormSignUp