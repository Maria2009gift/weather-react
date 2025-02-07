import style from "./DetailedInfo.module.css";

import CardsDetailed from "../CardsDetailed/CardsDetailed";
import Container from "../Elements/Container/Container";

function DetailedInfo({ locate }) {
  let a = false
  if (Object.keys(locate).length === 0) { 
    a = false
  } else {
    a = true
    
  }

  return (
    <Container>
      {a && 
      <ul className={style.list_detailedinfo}>
        <CardsDetailed subTitle={"Feels like"} value={`${locate.current.feelslike_c}℃`} />
        <CardsDetailed subTitle={"Condition"} value={`${locate.current.condition.text}`}/>
        <CardsDetailed subTitle={"Humidity"} value={`${locate.current.humidity}%`} />
        <CardsDetailed subTitle={"Pressure"} value={`${locate.current.pressure_mb}Pa`} />
        <CardsDetailed subTitle={"Wind speed"} value={`${locate.current.wind_kph}k/h`} />
        <CardsDetailed subTitle={"Clouds"} value={`${locate.current.cloud}`} />
      </ul>
      }
    </Container>
  );
}

export default DetailedInfo;
