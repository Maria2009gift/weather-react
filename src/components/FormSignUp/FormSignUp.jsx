
import style from './FormSignUp.module.css'
import Modal from '../Elements/Modal/Modal'

import { useState } from 'react'

function FormSignUp({getName, closeModal}) {

    const [user, setUser] = useState({})
    // const [name, setName] = useState("")
    // const [mail, setMail] = useState("")
    // const [password, setPassword] = useState("")

    function getUserData(event) {
        event.preventDefault()
        getName(event.target.name.value)
        setUser({name:event.target.name.value, mail: event.target.mail.value, password: event.target.password.value})
        closeModal(false)
    }


    return (
        <>
            <h2 className={style.title_signup}>Sign Up</h2>
            <form onSubmit={getUserData}>
                <label className={style.container_input}>
                    <p className={style.minititle_signup}>Username</p>
                    <input name='name' type="text" className={style.input_signup} placeholder='Username'/>
                </label>
                <label className={style.container_input}>
                    <p className={style.minititle_signup}>E-Mail</p>
                    <input name='mail' type="text" className={style.input_signup} placeholder='E-Mail'/>
                </label>
                <label className={style.container_input}>
                    <p className={style.minititle_signup}>Password</p>
                    <input name='password' type="text" className={style.input_signup} placeholder='Password'/>
                </label>
                <button type="submit" className={style.signup}>Sign Up</button>
            </form>
        </>
    )

}

export default FormSignUp