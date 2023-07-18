import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.css';
import Image from 'next/image'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {
    return (
        <div style={{ width: "960px", height: "540px" }}>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                style={{ width: "960px", height: "540px" }}
            >
                <SwiperSlide><Image
                    src="/img1.png"
                    alt="Image1"
                    layout='fill'
                    objectFit='cover'
                    priority
                /></SwiperSlide>
                <SwiperSlide><Image
                    src="/img2.png"
                    alt="Image2"
                    layout='fill'
                    objectFit='cover'
                    priority
                /></SwiperSlide>
                <SwiperSlide><Image
                    src="/img3.png"
                    alt="Image3"
                    layout='fill'
                    objectFit='cover'
                    priority
                /></SwiperSlide>
                <SwiperSlide><Image
                    src="/img3.png"
                    alt="Image3"
                    layout='fill'
                    objectFit='cover'
                    priority
                /></SwiperSlide>
            </Swiper>
        </div>
    );
}
