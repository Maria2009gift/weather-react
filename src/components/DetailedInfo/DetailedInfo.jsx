import style from "./DetailedInfo.module.css";

import CardsDetailed from "../CardsDetailed/CardsDetailed";
import Container from "../Elements/Container/Container";

import temperature from "../../img/temperature.png";
import humidity from "../../img/humidity.png";
import pressure from "../../img/pressure.png";
import wind from "../../img/wind.png";

import { useEffect, useState } from "react";

function DetailedInfo({ search, update }) {

  const [locate, setLocate] = useState({});

  let a = false;
  if (Object.keys(locate).length === 0) {
    a = false;
  } else {
    a = true;
  }

  useEffect(() => {
    if (search) {
      fetch(
        `https://api.weatherapi.com/v1/current.json?q=${search}&key=b5c7c9b360384cbb886211934251801`
      )
        .then((res) => res.json())
        .then((location) => {
          setLocate(location)
          a = true
        });
    }
  }, [search]);

  useEffect(() => {
    if (update) {
      fetch(
        `https://api.weatherapi.com/v1/current.json?q=${update}&key=b5c7c9b360384cbb886211934251801`
      )
        .then((res) => res.json())
        .then((location) => {
          console.log(location);
          a = true
          
          setLocate(location)
        });
    }
  }, [update]);


  return (
    <Container>
      {a && (
        <ul className={style.list_detailedinfo}>
          <CardsDetailed
            subTitle={"Feels like"}
            value={`${locate.current.feelslike_c}℃`}
            img={temperature}
          />
          <CardsDetailed
            subTitle={"Condition"}
            value={`${locate.current.condition.text}`}
            img={locate.current.condition.icon}
          />
          <CardsDetailed
            subTitle={"Humidity"}
            value={`${locate.current.humidity}%`}
            img={humidity}
          />
          <CardsDetailed
            subTitle={"Pressure"}
            value={`${locate.current.pressure_mb}Pa`}
            img={pressure}
          />
          <CardsDetailed
            subTitle={"Wind speed"}
            value={`${locate.current.wind_kph}k/h`}
            img={wind}
          />
          <CardsDetailed
            subTitle={"Clouds"}
            value={`${locate.current.cloud}`}
            img={"//cdn.weatherapi.com/weather/64x64/night/122.png"}
          />
        </ul>
      )}
    </Container>
  );
}

export default DetailedInfo;
