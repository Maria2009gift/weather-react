import style from "./DetailedInfo.module.css";

import CardsDetailed from "../CardsDetailed/CardsDetailed";
import Container from "../Elements/Container/Container";

// import { useState, useEffect, useRef } from "react";

function DetailedInfo({ search }) {
  // const [locations, setLocations] = useState([]);

  // useEffect(() => {
  //   if (search) {
  //     fetch(
  //       `http://api.weatherapi.com/v1/current.json?q=${search}&key=b5c7c9b360384cbb886211934251801`
  //     )
  //       .then((res) => res.json())
  //       .then((locate) => {
  //         const arrayNewLocations = [locate];
  //         setLocations(arrayNewLocations);
  //         console.log(5);
  //       });
  //   }
  // }, [search]);
  return (
    <Container>
      <ul className={style.list_detailedinfo}>
        <CardsDetailed subTitle={"Feels like"} value={`25℃`} />
        <CardsDetailed
          subTitle={"Min ℃"}
          value={"27.9℃"}
          secondSubTitle={"Max ℃"}
          secondValue={"27.9℃"}
        />
        <CardsDetailed subTitle={"Humidity"} value={"59%"} />
        <CardsDetailed subTitle={"Pressure"} value={"1007 Pa"} />
        <CardsDetailed subTitle={"Wind speed"} value={"3.17 m/s"} />
        <CardsDetailed subTitle={"Visibility"} value={"Unlimited"} />
      </ul>
    </Container>
  );
}

export default DetailedInfo;
