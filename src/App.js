
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
import Modal from './components/Elements/Modal/Modal';

import { useState } from 'react';

function App() {

  const [searchedLocation, setSearchedLocation] = useState("")
  const [modalVisability, setModalVisability] = useState(false)


  return (
    <>
      <Header openModal={setModalVisability}/>
      {modalVisability && <Modal closeModal={setModalVisability}/>}
      <Hero getSearch={setSearchedLocation}/>
      <CityList search={searchedLocation}/>
      <DetailedInfo search={searchedLocation}/>
      <ForecastChart/>
      <ForecastSchedule/>
      <News/>
      <GallerySlider/>
      <Footer/>
    </>
  )
}

export default App;
