import Container from "../Elements/Container/Container";
import style from "./ForecastSchedule.module.css";
import { useState, useEffect } from "react";

function ForecastSchedule({ search, updated }) {
  
  const [locations, setLocations] = useState([]);
  const [a, setA] = useState(false);
  useEffect(() => {
    if (search) {
      fetch(
        `http://api.weatherapi.com/v1/forecast.json?days=7&q=${search}&key=b5c7c9b360384cbb886211934251801`
      )
        .then((res) => res.json())
        .then((locate) => {
          setLocations(locate);
          setA(true);
        });
    }
  }, [search]);
  useEffect(() => {
  console.log(updated);

    if (updated) {
      fetch(
        `http://api.weatherapi.com/v1/forecast.json?days=7&q=${updated}&key=b5c7c9b360384cbb886211934251801`
      )
        .then((res) => res.json())
        .then((locate) => {
          setLocations(locate);
          setA(true);
        });
    }
  }, [updated]);

  return (
    <Container>
      {search && (
        <div className={style.container}>
          <h2 className={style.title}>3-day forecast</h2>
          <div className={style.container_days}>
            {a &&
              locations.forecast.forecastday.map((location) => (
                <div className={style.day}>
                  <p className={style.date}>Fri, Oct 13</p>
                  <div className={style.container_wether}>
                    <img src={location.day.condition.icon} alt="" className={style.wether_img}/>
                    <p className={style.temp}>{`${location.day.maxtemp_c}/${location.day.mintemp_c}℃`}</p>
                  </div>
                  <p className={style.condition}>{location.day.condition.text}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </Container>
  );
}

export default ForecastSchedule;
//   http://api.weatherapi.com/v1/forecast.json?days=7&q=paris&key=b5c7c9b360384cbb886211934251801
