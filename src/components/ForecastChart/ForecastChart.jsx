import style from "./Forecast.module.css";

import Container from "../Elements/Container/Container";

import { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Forecast({ search }) {
  const [locations, setLocations] = useState([]);
  // const [searchValue, setSearchValue] = useState(search)
  // console.log(search);

  useEffect(() => {
    if (search) {
      fetch(
        `http://api.weatherapi.com/v1/forecast.json?q=${search}&key=b5c7c9b360384cbb886211934251801`
      )
        .then((res) => res.json())
        .then((locate) => {
          console.log(locate.forecast.forecastday[0].hour);
          const forecast = [locate.forecast.forecastday[0].hour];
          const hours = [];
          forecast[0].map((hour) => {
            hours.push(hour.heatindex_c);
            // console.log(hours)
            setLocations(hours);
            return hours;
          });
          // setLocations(forecast)
          // console.log(locations);heatindex_c
        });
    }
    // if (locations.length) {
    //   locations.map(locate => {
    //     console.log(locate)
    //     return locate

    //   })
    // }
  }, [search]);

  // useEffect(()=> {

  // }, [locations])

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const labels = [
    "1am",
    "2am",
    "3am",
    "4am",
    "5am",
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12am",
    "13am",
    "14am",
    "15am",
    "16am",
    "17am",
    "18am",
    "19am",
    "20am",
    "21am",
    "22am",
    "23am",
    "24am",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [...locations],
        backgroundColor: "rgb(255, 179, 108)",
      },
    ],
  };

  return (
    <Container>
      <div className={style.chart}>
        {search && <Line options={options} data={data} />}
      </div>
    </Container>
  );
}

export default Forecast;
// http://api.weatherapi.com/v1/forecast.json?q=kyiv&key=b5c7c9b360384cbb886211934251801
