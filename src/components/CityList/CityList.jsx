
import CityItem from "../CityItem/CityItem";
import Container from "../Elements/Container/Container";

import { useState, useEffect } from "react";

function CityList({search}) {

  const [locations, setLocations] = useState([])

  useEffect(()=>{
    if (search) {
      
      fetch(`http://api.weatherapi.com/v1/current.json?q=${search}&key=b5c7c9b360384cbb886211934251801`)
      .then(res => res.json())
      .then(locate => {
        console.log(locate);
        
        setLocations({ l: locate })
      }
        
        
     
      )
    }
  },[search]) 



  return (
    <Container>
      <ul>

        {locations.l && 

          <CityItem data={locations.l}/>

        }
      </ul>
    </Container>
  );
}

export default CityList;
// b5c7c9b360384cbb886211934251801 

