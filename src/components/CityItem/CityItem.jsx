import style from "./CityItem.module.css";

function CityItem({ data }) {
  
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
        <button className={style.forecast}>Weekly forecast</button>
      </div>
      <div className={style.container_day}>
        <p className={style.data}>{fullDay()}</p>
        <hr className={style.line_day}/>
        <p className={style.day}>{day()}</p>
      </div>
      <img src={data.current.condition.icon} alt="" className={style.img_weather} />
      <p className={style.temperature}>{`${data.current.heatindex_c}°C`}</p>
      <ul className={style.list_instruments_card}>
        <li className={style.item}>
          <button className={style.reset}>R</button>
        </li>
        <li className={style.item}>
          <button className={style.favorite}>H</button>
        </li>
        <li className={style.item}>
          <button className={style.seemore}>SM</button>
        </li>
        <li className={style.item}>
          <button className={style.delete}>D</button>
        </li>
      </ul>
    </li>
  );
}

export default CityItem;
