import style from "./Cards.Detailed.module.css";

function CardsDetailed({ subTitle, value, img, secondSubTitle, secondValue }) {
  return (
    <li className={style.item}>
      <h3 className={style.subtitle}>{subTitle}</h3>
      <p className={style.value}>{value}</p>
      {secondSubTitle && (
        <>
          <h3 className={style.subtitle}>{secondSubTitle}</h3>
          <p className={style.value}>{secondValue}</p>
        </>
      )}

      <p className={style.img}></p>
    </li>
  );
}

export default CardsDetailed;
