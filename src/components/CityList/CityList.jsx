import style from "./CityList.module.css"
import CityItem from "../CityItem/CityItem";
import Container from "../Elements/Container/Container";

import { useState, useEffect } from "react";

function CityList({ search }) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    if (search) {
      fetch(
        `http://api.weatherapi.com/v1/current.json?q=${search}&key=b5c7c9b360384cbb886211934251801`
      )
        .then((res) => res.json())
        .then((locate) => {
          
          if (locations.length) {
            const arrayNewLocations = [...locations, locate]
            setLocations(arrayNewLocations)

            
          } 
          else {
      
            const arrayNewLocations = [locate]
            setLocations(arrayNewLocations)

          }

        });
    }
  }, [search]);

  return (
    <Container>
      <ul className={style.list_City}>{locations && locations.map((locations) => <CityItem data={locations}/>)}</ul>
    </Container>
  );
}

export default CityList;
// b5c7c9b360384cbb886211934251801
