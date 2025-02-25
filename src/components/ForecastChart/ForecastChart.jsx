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

function Forecast({ search, updated }) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    if (search) {
      fetch(
        `https://api.weatherapi.com/v1/forecast.json?q=${search}&key=b5c7c9b360384cbb886211934251801`
      )
        .then((res) => res.json())
        .then((locate) => {
          const forecast = [locate.forecast.forecastday[0].hour];
          const hours = [];
          forecast[0].map((hour) => {
            hours.push(hour.heatindex_c);
            setLocations(hours);
            return hours;
          });
        });
    }
  }, [search]);

  useEffect(() => {
    if (updated) {
      fetch(
        `http://api.weatherapi.com/v1/forecast.json?q=${updated}&key=b5c7c9b360384cbb886211934251801`
      )
        .then((res) => res.json())
        .then((locate) => {
          const forecast = [locate.forecast.forecastday[0].hour];
          const hours = [];
          forecast[0].map((hour) => {
            hours.push(hour.heatindex_c);
            setLocations(hours);
            return hours;
          });
        });
    }
  }, [updated]);

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
        label: "Hourly forecast",
        data: [...locations],
        backgroundColor: "rgb(255, 179, 108)",
        
      },
    ],
  };

  return (
    <Container>
      {search && <div className={style.chart}><Line options={options} data={data}/></div>}
    </Container>
  );
}

export default Forecast;
// http://api.weatherapi.com/v1/forecast.json?q=kyiv&key=b5c7c9b360384cbb886211934251801
