
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
  const [searchedLocationData, setSearchedLocationData] = useState({})
  const [modalVisability, setModalVisability] = useState(false)
  const [userName, setUserName] = useState("Avatar")
  

  return (
    <>
      <Header openModal={setModalVisability} nameUser={userName}/>
      {modalVisability && <Modal closeModal={setModalVisability} getName={setUserName}/>}
      <Hero getSearch={setSearchedLocation}/>
      {/* {console.log(searchedLocation)  } */}
      <CityList search={searchedLocation} getLoactionData={setSearchedLocationData}/>
      {searchedLocation && <DetailedInfo locate={searchedLocationData}/>}
      <ForecastChart/>
      <ForecastSchedule/>
      <News/>
      <GallerySlider/>
      <Footer/>
    </>
  )
}

export default App;
