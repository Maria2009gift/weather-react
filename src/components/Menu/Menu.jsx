import style from "./Menu.module.css";
import user_img from "../../img/user.png";

function Menu({ closeMenu, openModal, nameUser }) {
  function closeMenuForm(event) {
    if (event.currentTarget === event.target) {
      closeMenu(false);
    }
  }
  function startRegistration() {
    closeMenu(false);
    openModal(true);
  }

  return (
    <div className={style.backdrop} onClick={closeMenuForm}>
      <div className={style.modal}>
        <div className={style.content_box}>
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
          </ul>
          <div className={style.container_user}>

            {nameUser ? (
              <p className="user_avatar">{nameUser}</p>
            ) : (
              <img src={user_img} alt="" className={style.user_avatar} />
            )}
            <button
              type="button"
              className={style.button_signup}
              onClick={startRegistration}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
