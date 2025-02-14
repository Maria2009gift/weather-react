import style from './GallerySlider.module.css'

import Container from "../Elements/Container/Container";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/element/css/effect-coverflow";

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
      <div className={style.container_gallery}>
        <h2 className="title_halleryslider">Beautiful nature</h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {images.images &&
            images.images.map((img) => (
              <SwiperSlide>
                <img src={img.previewURL} alt="" width="200px" />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </Container>
  );
}

export default GallerySlider;
