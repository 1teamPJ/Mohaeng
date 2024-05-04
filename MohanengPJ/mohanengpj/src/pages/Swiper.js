import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import houseone from '../img/houseimg/house1.webp';
import housetwo from '../img/houseimg/house2.webp';
import housethree from '../img/houseimg/house3.webp';
import housefour from '../img/houseimg/house4.webp';
import housefive from '../img/houseimg/house5.webp';

export default function SwiperComponent() {
    return (
        <div className="App">

            <h1>여러 숙소들을 특가로 알아보세요!</h1>

            <Swiper
                spaceBetween={50}
                slidesPerView={2}
                centeredSlides
                onSlideChange={() => console.log("slide change")}
                onSwiper={swiper => console.log(swiper)}
                >
                <SwiperSlide> <a href="https://www.yeogi.com/domestic-accommodations/72754?checkIn=2024-05-04&checkOut=2024-05-05&personal=2" target="_blank" rel="noopener noreferrer">
                        <img src={houseone} alt="houseone"/>
                    </a></SwiperSlide>
                <SwiperSlide> <a href="https://www.yeogi.com/domestic-accommodations/52136?checkIn=2024-05-04&checkOut=2024-05-05&personal=2" target="_blank" rel="noopener noreferrer">
                        <img src={housetwo} alt="housetwo"/>
                    </a></SwiperSlide>
                <SwiperSlide> <a href="https://www.yeogi.com/domestic-accommodations/57295?checkIn=2024-05-04&checkOut=2024-05-05&personal=2" target="_blank" rel="noopener noreferrer">
                        <img src={housethree} alt="housethree"/>
                    </a></SwiperSlide>
                <SwiperSlide> <a href="https://www.yeogi.com/domestic-accommodations/4478?checkIn=2024-05-04&checkOut=2024-05-05&personal=2" target="_blank" rel="noopener noreferrer">
                        <img src={housefour} alt="housefour"/>
                    </a></SwiperSlide>
                <SwiperSlide> <a href="https://www.yeogi.com/domestic-accommodations/805?checkIn=2024-05-04&checkOut=2024-05-05&personal=2" target="_blank" rel="noopener noreferrer">
                        <img src={housefive} alt="housefive"/>
                    </a></SwiperSlide>
            </Swiper>
        </div>
    );
}
