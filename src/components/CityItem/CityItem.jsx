import style from "./CityItem.module.css";

import refresh from '../../img/refresh.png';
import heart from '../../img/heart.png';
import deletebin from '../../img/delete.png'


import { useState } from "react";

function CityItem({ data, arrayOfLocations, toUpdateLocations }) {

  const [favoriteLocations, setFavoriteLOcations] = useState([])

  function toRefresh(event) {
    const locationName = event.currentTarget.id

    fetch(`http://api.weatherapi.com/v1/current.json?q=${locationName}&key=b5c7c9b360384cbb886211934251801`)
    .then((res) => res.json())
    .then((locate) => {
      const indexOfLocation = arrayOfLocations.findIndex(location => location.location.name === locationName)
      console.log(indexOfLocation);
      arrayOfLocations[indexOfLocation] = locate 
      toUpdateLocations(arrayOfLocations);
      

    })
  }

  function addFavorite(event) {
    // const locationName = event.currentTarget.id
    // const favoriteLocation = arrayOfLocations.find(location => location.location.name === locationName)
    // if (favoriteLocations.length === 0) {
    //   const array = []
    //   array.push(favoriteLocations)
    //   setFavoriteLOcations([...array])
    //   localStorage.setItem("favorites", favoriteLocations)
    //   console.log(favoriteLocations);
      
    // } else {
    //   setFavoriteLOcations([...favoriteLocations, favoriteLocation])
    //   localStorage.setItem("favorites", JSON.stringify(favoriteLocations))
    // }
  }

  function deleteCard(event) {
    const locationName = event.currentTarget.id
    const filteredLocations = arrayOfLocations.filter(location => location.location.name !== locationName)
    toUpdateLocations(filteredLocations)
  }
  
  const fullDay = () => {
    let now = new Date();
    return `${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()}`
  }

  const day = () => {
    let now = new Date();
    let day = now.getDay();
    switch (day) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wensday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        break;
    }
  }
  

  return (
    <li className={style.item_citylist}>
      <div className={style.container_location}>
        <p className={style.location}>{data.location.name}</p>
        <p className={style.location}>{data.location.country}</p>
      </div>
      <p className={style.time}>{data.location.localtime.slice(10, 16)}</p>
      <div className={style.container_forecasts}>
        <button className={style.forecast}>Hourly forecast</button>
        <button className={style.forecast}>3-day forecast</button>
      </div>
      <div className={style.container_day}>
        <p className={style.data}>{fullDay()}</p>
        <hr className={style.line_day}/>
        <p className={style.day}>{day()}</p>
      </div>
      <img src={data.current.condition.icon} alt={data.current.condition.text} className={style.img_weather} />
      <p className={style.temperature}>{`${data.current.heatindex_c}°C`}</p>
      <ul className={style.list_instruments_card}>
        <li className={style.item}>
          <button className={style.refresh} onClick={toRefresh} id={data.location.name}><img src={refresh} alt="" /></button>
        </li>
        <li className={style.item}>
          <button className={style.favorite} onClick={addFavorite} id={data.location.name}><img src={heart} alt="" /></button>
        </li>
        <li className={style.item}>
          <button className={style.seemore}>See more</button>
        </li>
        <li className={style.item}>
          <button className={style.delete} onClick={deleteCard} id={data.location.name}><img src={deletebin} alt="" /></button>
        </li>
      </ul>
    </li>
  );
}

export default CityItem;
