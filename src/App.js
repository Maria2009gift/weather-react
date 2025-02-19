import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import CityList from "./components/CityList/CityList";
import DetailedInfo from "./components/DetailedInfo/DetailedInfo";
import ForecastChart from "./components/ForecastChart/ForecastChart";
import ForecastSchedule from "./components/ForecastSchedule/ForecastSchedule";
import News from "./components/News/News";
import GallerySlider from "./components/GallerySlider/GallerySlider";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Elements/Modal/Modal";
import Menu from "./components/Menu/Menu";

import { useState } from "react";

function App() {
  const [searchedLocation, setSearchedLocation] = useState("");
  const [searchedLocationData, setSearchedLocationData] = useState({});
  const [modalVisability, setModalVisability] = useState(false);
  const [menuVisibility, setMenuVisibilty] = useState(false)
  const [userName, setUserName] = useState(null);
  

  return (
    <>
      <Header openModal={setModalVisability} menu={setMenuVisibilty} nameUser={userName} />
      {modalVisability && (
        <Modal closeModal={setModalVisability} getName={setUserName} />
      )}
      {menuVisibility && <Menu closeMenu={setMenuVisibilty} openModal={setModalVisability} nameUser={userName}/>}
      <Hero getSearch={setSearchedLocation} />
      <CityList
        search={searchedLocation}
        getLoactionData={setSearchedLocationData}
        nameUser={userName}
      />
      {searchedLocation && userName ? <DetailedInfo locate={searchedLocationData} /> : <p className="registration_alert">If you want more info, register pls</p> }
      {userName && <ForecastChart search={searchedLocation}/>}
      {userName && <ForecastSchedule search={searchedLocation} />}
      <News />
      <GallerySlider />
      <Footer />
    </>
  );
}

export default App;
