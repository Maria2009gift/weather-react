
function DetailedInfo() {
    return (
      <div>
        <ul className="list_detailedinfo">
            <li className="item">
                <h3 className="title_qualities">Feels like</h3>
                <p className="value">29.2℃</p>
                <p className="img"></p>
            </li>
            <li className="item">
                <h3 className="title_qualities">Min ℃</h3>
                <p className="value">27.9℃</p>
                <h3 className="title_qualities">Max ℃</h3>
                <p className="value">27.9℃</p>
                <p className="img"></p>
            </li>
            <li className="item">
                <h3 className="title_qualities">Humidity</h3>
                <p className="value">59%</p>
                <p className="img"></p>
            </li>
            <li className="item">
                <h3 className="title_qualities">Pressure</h3>
                <p className="value">1007 Pa</p>
                <p className="img"></p>
            </li>
            <li className="item">
                <h3 className="title_qualities">Wind speed</h3>
                <p className="value">3.17 m/s</p>
                <p className="img"></p>
            </li>
            <li className="item">
                <h3 className="title_qualities">Visibility</h3>
                <p className="value">Unlimited</p>
                <p className="img"></p>
            </li>
        </ul>
  
      </div>
    );
  }
  
  export default DetailedInfo;