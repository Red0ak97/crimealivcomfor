// src/components/carouselComponent/CarouselComponent.js
import React, { useEffect, useRef } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Импортируйте ваши изображения
import slide1Img from '../../assets/img/project-1.png';
import slide2Img from '../../assets/img/project-2.png';
import slide3Img from '../../assets/img/project-3.png';
import slide4Img from '../../assets/img/project-4.png';
import slide5Img from '../../assets/img/project-5.png';
import slide6Img from '../../assets/img/project-6.png';
import slide7Img from '../../assets/img/project-7.png';

// Импортируйте ваш собственный SCSS файл для кастомизации стиля
import './CarouselComponent.scss';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const CarouselComponent = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.start();
    }
  }, []);

  console.log('Images:', slide1Img, slide2Img, slide3Img, slide4Img, slide5Img, slide6Img, slide7Img); // Логирование изображений

  return (
    <section id='carousel'>
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }} // Изменяем задержку на 4 секунды
        loop
      >
        <SwiperSlide>
          <img src={slide1Img} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2Img} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3Img} alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4Img} alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5Img} alt="Slide 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide6Img} alt="Slide 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide7Img} alt="Slide 7" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CarouselComponent;