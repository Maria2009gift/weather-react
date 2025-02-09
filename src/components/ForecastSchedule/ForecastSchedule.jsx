import Container from "../Elements/Container/Container";
import style from "./ForecastSchedule.module.css";
import { useState, useEffect } from "react";

function ForecastSchedule({ search }) {
  const [locations, setLocations] = useState([]);
  const [a, setA] = useState(false);
  useEffect(() => {
    if (search) {
      fetch(
        `http://api.weatherapi.com/v1/forecast.json?days=7&q=${search}&key=b5c7c9b360384cbb886211934251801`
      )
        .then((res) => res.json())
        .then((locate) => {
          // console.log(locate.forecast.forecastday);
          setLocations(locate);
          setA(true);
        });
    }
  }, [search]);

  return (
    <Container>
      {search && (
        <div className={style.container}>
          <h2 className={style.title}>3-day forecast</h2>
          <div className={style.container_days}>
            {a &&
              locations.forecast.forecastday.map((location) => (
                <div className={style.day}>
                  <p>Fri, Oct 13</p>
                  <p>{`${location.day.maxtemp_c}/${location.day.mintemp_c}℃`}</p>
                  <p>{location.day.condition.text}</p>
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
