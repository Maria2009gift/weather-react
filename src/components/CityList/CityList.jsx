import style from "./CityList.module.css";
import CityItem from "../CityItem/CityItem";
import Container from "../Elements/Container/Container";

import { useState, useEffect } from "react";

function CityList({ search, nameUser, updateForecast }) {
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("favorites"))
  );
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    
    if (search) {
      fetch(
        `http://api.weatherapi.com/v1/current.json?q=${search}&key=b5c7c9b360384cbb886211934251801`
      )
        .then((res) => res.json())
        .then((locate) => {

          if (locations.length === 3 && favorite === null) {
            locations.shift()
            if (locations.length) {
              const arrayNewLocations = [...locations, locate];
              setLocations(arrayNewLocations);
            } else {
              const arrayNewLocations = [locate];
              setLocations(arrayNewLocations);
            }
          }

          if (locations.length === 2 && favorite !== null) {
            locations.shift()
            if (locations.length) {
              const arrayNewLocations = [...locations, locate];
              setLocations(arrayNewLocations);
            } else {
              const arrayNewLocations = [locate];
              setLocations(arrayNewLocations);
            }
          } 

          else {
            if (locations.length) {
              const arrayNewLocations = [...locations, locate];
              setLocations(arrayNewLocations);
            } else {
              const arrayNewLocations = [locate];
              setLocations(arrayNewLocations);
            }
          }
        });
    }
  }, [search]);

  return (
    <Container>
      <ul className={style.list_City}>
        {locations &&
          locations.map((location) => (
            <CityItem
              data={location}
              arrayOfLocations={locations}
              toUpdateLocations={setLocations}
              fav="notFav"
              userName={nameUser}
              updateF={updateForecast}
            />
          ))}
        {favorite && (
          <CityItem
            data={favorite}
            arrayOfLocations={locations}
            toUpdateLocations={setLocations}
            isfav="fav"
            updateFav={setFavorite}
            updateF={updateForecast}
          />
        )}
      </ul>
    </Container>
  );
}

export default CityList;
// b5c7c9b360384cbb886211934251801
