
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import CityList from './components/CityList/CityList';
import DetailedInfo from './components/DetailedInfo/DetailedInfo';
import ForecastChart from './components/ForecastChart/ForecastChart';
import ForecastSchedule from './components/ForecastSchedule/ForecastSchedule';
import News from './components/News/News';
import GallerySlider from './components/GallerySlider/GallerySlider';
import Footer from './components/Footer/Footer';

import { useState } from 'react';

function App() {

  const [searchedLocation, setSearchedLocation] = useState("")


  return (
    <>
      <Header/>
      <Hero getSearch={setSearchedLocation}/>
      <CityList search={searchedLocation}/>
      <DetailedInfo/>
      <ForecastChart/>
      <ForecastSchedule/>
      <News/>
      <GallerySlider/>
      <Footer/>
    </>
  )
}

export default App;
