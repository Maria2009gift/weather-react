import style from './GallerySlider.module.css'
import f from '../../img/facebook.png'
import Container from "../Elements/Container/Container";

import { useState, useEffect } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';


function GallerySlider() {
  const [images, setImage] = useState({});

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?category=nature&q=forest&page=1&per_page=5&key=44002611-c1194520823d769ac47082ab5`
    )
      .then((res) => res.json())
      .then((aOfImg) => {
        setImage({ images: aOfImg.hits });
      });
  }, []);

  return (
    <Container>
      {/* <div className={style.container_gallery}>
        <h2 className="title_halleryslider">Beautiful nature</h2>
        <Splide options={ {
        rewind: true,
        gap   : '1rem',
      } }
      aria-label="My Favorite Images">
          {images.images &&
            images.images.map((img) => (
              <SplideSlide>
                <img src={f} alt="" />
              </SplideSlide>
            ))}
        </Splide >
      </div> */}
    </Container>
  );
}

export default GallerySlider;
{/* <img src={img.previewURL} alt="nature" width="200px" /> */}
