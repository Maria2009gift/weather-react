import style from './GallerySlider.module.css'
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import Container from "../Elements/Container/Container";

import { useState, useEffect } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';


function GallerySlider() {
  const [images, setImage] = useState({});

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?category=nature&q=forest+mountains&orientation=horizontal&page=10&per_page=14&key=44002611-c1194520823d769ac47082ab5`
    )
      .then((res) => res.json())
      .then((aOfImg) => {
        setImage({ images: aOfImg.hits });
      });
  }, []);

  return (
    <Container>
      <div className={style.container_gallery}>
        <h2 className="title_halleryslider">Beautiful nature</h2>
        <Splide options={ {
          type    : 'loop',
          perPage : 5,
          autoplay: true,
        }}
      aria-label="My Favorite Images">
          {images.images &&
            images.images.map((img) => (
              <SplideSlide>
                <img src={img.previewURL} alt="nature" width="200" />
              </SplideSlide>
            ))}
        </Splide >
      </div>
    </Container>
  );
}

export default GallerySlider;


    //   <SplideSlide>
    //   <img src={f} alt="Image 1"/>
    // </SplideSlide>
    // <SplideSlide>
    //   <img src={f} alt="Image 2"/>
    // </SplideSlide>