import style from './Footer.module.css'

import logo from '../../img/logo.png'
import whatsapp from '../../img/whatsapp.png'
import facebook from '../../img/facebook.png'
import instagram from '../../img/instagram.png'


function Footer() {
  return (
    <footer className={style.footer}>
      <img src={logo} alt="" className={style.logo}/>
      <div className={style.container_adress}>
        <h3 className={style.title_adress}>Address</h3>
        <ul className={style.list_adress}>
          <li className={style.item_adress}>
            <p className={style.p_adress}>Svobody str. 35</p>
          </li>
          <li className={style.item_adress}>
            <p className={style.p_adress}>Kyiv</p>
          </li>
          <li className={style.item_adress}>
            <p className={style.p_adress}>Ukraine</p>
          </li>
        </ul>
      </div>
      <div className={style.container_contact}>
        <h3 className={style.title_contacts}>Contact us</h3>
        <ul className={style.list_contacts}>
          <li className="style.item_contacts">
            <img src={instagram} alt="" className={style.icon_media}/> 
          </li>
          <li className="item_contacts">
            <img src={facebook} alt="" className={style.icon_media}/>
          </li>
          <li className="item_contacts">
            <img src={whatsapp} alt="" className={style.icon_media}/>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
