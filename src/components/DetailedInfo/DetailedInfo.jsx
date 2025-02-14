import style from "./DetailedInfo.module.css";

import CardsDetailed from "../CardsDetailed/CardsDetailed";
import Container from "../Elements/Container/Container";

import temperature from "../../img/temperature.png"
import humidity from "../../img/humidity.png"
import pressure from "../../img/pressure.png"
import wind from "../../img/wind.png"


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
        <CardsDetailed subTitle={"Feels like"} value={`${locate.current.feelslike_c}℃`} img={temperature}/>
        <CardsDetailed subTitle={"Condition"} value={`${locate.current.condition.text}`} img={locate.current.condition.icon}/>
        <CardsDetailed subTitle={"Humidity"} value={`${locate.current.humidity}%`} img={humidity}/>
        <CardsDetailed subTitle={"Pressure"} value={`${locate.current.pressure_mb}Pa`} img={pressure}/>
        <CardsDetailed subTitle={"Wind speed"} value={`${locate.current.wind_kph}k/h`} img={wind}/>
        <CardsDetailed subTitle={"Clouds"} value={`${locate.current.cloud}`} img={"//cdn.weatherapi.com/weather/64x64/night/122.png"}/>
      </ul>
      }
    </Container>
  );
}

export default DetailedInfo;
