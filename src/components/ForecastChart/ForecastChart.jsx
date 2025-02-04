import style from './Forecast.module.css'

import Container from '../Elements/Container/Container';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Forecast() {

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
  
  const labels = ['1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12am',];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [1, 2, 3, 4, 3, 7, 9, 12, 4, 6, 4, 3],
        // borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      // {
      //   label: 'Dataset 2',
      //   data: [1, 9, 3, 1, 5,],
      //   // borderColor: 'rgb(53, 162, 235)',
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
      // },
    ],
  };

    return (
      <Container>
        <div className={style.chart}>
          <Line options={options} data={data} />
    
        </div>
      </Container>
    );
  }
  
  export default Forecast;
  // http://api.weatherapi.com/v1/forecast.json?q=kyiv&key=b5c7c9b360384cbb886211934251801