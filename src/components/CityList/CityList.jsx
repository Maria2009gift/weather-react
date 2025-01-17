
import CityItem from "../CityItem/CityItem";

import { useState, useEffect } from "react";

function CityList({search}) {

  const [locations, setLocations] = useState([])

  // useEffect(()=>{
  //   fetch("https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={e707438f10be2f4d25a89228815d50cc}")
  //   .then(res => res.json())
  //   .then(locate => console.log(locate)
  //   )
  // },[]) 

  return (
    <ul>
      {/* list.map((city) => <CityItem data={city}/>) */}
    </ul>
  );
}

export default CityList;
// e707438f10be2f4d25a89228815d50cc lat=33.44&lon=-94.04&

