import style from './Footer.module.css'

function Footer() {
  return (
    <footer className={style.footer}>
      <p className="logo">24forecast</p>
      <div className="container_adress">
        <h3 className="title_adress">Address</h3>
        <ul className={style.list_adress}>
          <li className="item_adress">
            <p className="p_adress">Svobody str. 35</p>
          </li>
          <li className="item_adress">
            <p className="p_adress">Kyiv</p>
          </li>
          <li className="item_adress">
            <p className="p_adress">Ukraine</p>
          </li>
        </ul>
      </div>
      <div className="container_contact">
        <h3 className="title_contacts">Contact us</h3>
        <ul className="list_contacts">
          <li className="item_contacts">
            <p className="socialmedia"></p>
          </li>
          <li className="item_contacts">
            <p className="socialmedia"></p>
          </li>
          <li className="item_contacts">
            <p className="socialmedia"></p>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
