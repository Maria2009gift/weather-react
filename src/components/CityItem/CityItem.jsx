
function CityItem() {
    return (
      <li>
        <div className="container_location">
            <p className="location">Prague</p>
            <p className="location">Czech Republic</p>
        </div>
        <p className="time">14:00</p>
        <div className="container_forecasts">
            <button className="forecast">Hourly forecast</button>
            <button className="forecast">Weekly forecast</button>
        </div>
        <div className="container_day">
            <p className="data">13.10.2023</p>
            <hr/>
            <p className="day">Friday</p>
        </div>
        <img src="" alt="" className="img_weather"/>
        <p className="temperature">22C</p>
        <ul className="list_instruments_card">
            <li className="item">
                <button className="reset"></button>
            </li>
            <li className="item">
                <button className="favorite"></button>
            </li>
            <li className="item">
                <button className="seemore"></button>
            </li>
            <li className="item">
                <button className="delete"></button>
            </li>
        </ul>
      </li>
    );
  }
  
  export default CityItem;