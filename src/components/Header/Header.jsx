import style from "./Header.module.css";

import Container from "../Elements/Container/Container";

function Header({ openModal, nameUser }) {
  function startRegistration() {
    openModal(true);
  }

  return (
    <Container>
      <header className={style.header}>
        <p className={style.logo}>24Forecast</p>
        <ul className={style.list_info}>
          <li className="item_info">
            <a href="" className={style.info}>
              Who we are
            </a>
          </li>
          <li className="item_info">
            <a href="" className={style.info}>
              Contacts
            </a>
          </li>
          <li className="item_info">
            <a href="" className={style.info}>
              Menu
            </a>
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
          <p className="user_avatar">{nameUser}</p>
        </div>
      </header>
    </Container>
  );
}

export default Header;
