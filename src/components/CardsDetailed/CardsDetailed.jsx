import style from "./Cards.Detailed.module.css";

function CardsDetailed({ subTitle, value, img}) {
  return (
    <li className={style.item}>
      <h3 className={style.subtitle}>{subTitle}</h3>
      <p className={style.value}>{value}</p>
      <img className={style.icon} src="../../img/pressure.png" alt="" />
    </li>
  );
}

export default CardsDetailed;
