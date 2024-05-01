'use client'
import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/thumbs';
import 'swiper/css/grid';
import 'swiper/css/free-mode';
import Image from 'next/image';

// import required modules
import {
    Autoplay,
    Pagination,
    Navigation,
    EffectCoverflow,
    Thumbs,
    FreeMode,
    Grid,
    Keyboard,
    Mousewheel,
} from 'swiper/modules';



// TBEL
const images = [
    "https://images.unsplash.com/photo-1503424886307-b090341d25d1?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1549558549-415fe4c37b60?q=80&w=2019&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1461301214746-1e109215d6d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1495312040802-a929cd14a6ab?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]

const HeroCarousel = () => {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            className='w-screen h-screen bg-red-400'
            navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
            }}
            pagination={true} // Add pagination prop
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            keyboard={{
                enabled: true,
                onlyInViewport: true,
            }}
            mousewheel={{
                forceToAxis: true,
            }}
            modules={[Autoplay, Pagination, Navigation, EffectCoverflow, Thumbs, FreeMode, Keyboard, Mousewheel]}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index} >
                    <Image
                        src={image}
                        alt="image"
                        className='h-screen w-screen '
                        style={{
                            objectFit: "cover"
                        }}
                        fill={true}
                    />
                </SwiperSlide>
            ))}

            <div className="swiper-button-prev relative">
                <div className='absolute h-20 w-20 bg-black' onClick={(swiper) => {swiper.slidePrev}}></div>
            </div>
            <div className="swiper-button-next relative">
                <div className='absolute h-20 w-20 bg-black' onClick={(swiper) => {swiper.slideNext}}></div>
            </div>
        </Swiper>
    );
}

export default HeroCarousel;

