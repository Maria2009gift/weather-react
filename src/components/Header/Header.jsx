import style from "./Header.module.css";

import logo from '../../img/logo.png'
import user_img from '../../img/user.png'

import Container from "../Elements/Container/Container";

function Header({ openModal, menu, nameUser }) {
  function startRegistration() {
    openModal(true);
  }

  function openMenu() {
    // document.preventDefalt()
    menu(true)
  }

  return (
    <Container>
      <header className={style.header}>
        <img src={logo} alt="" className={style.logo}/>
        <ul className={style.list_info}>
          <li className={style.item_info}>
            <a href="g" className={style.info}>
              Who we are
            </a>
          </li>
          <li className={style.item_info}>
            <a href="g" className={style.info}>
              Contacts
            </a>
          </li>
          <li className={style.menu}>
            <button type="button" className={style.menu} onClick={openMenu}>
              Menu
            </button>
          </li>
        </ul>
        <div className={style.container_user}>
          <button
            type="button"
            className={style.button_signup}
            onClick={startRegistration}
          >
            Sign Up
          </button>
          
          {nameUser ? <p className="user_avatar">{nameUser}</p> : <img src={user_img} alt="" className="user_avatar"/>}
          
        </div>
      </header>
    </Container>
  );
}

export default Header;
