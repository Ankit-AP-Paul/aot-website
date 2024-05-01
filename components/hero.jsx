'use client'
import React, { useRef, useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { cn } from "@/utils/cn";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
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
    "/assets/images/carousel1.webp",
    "/assets/images/carousel2.webp",
    "/assets/images/carousel3.webp",
    "/assets/images/carousel4.webp",
    "/assets/images/carousel5.webp",
]

const HeroCarousel = () => {
    const sliderRef = useRef();
    const [currImageIndex, setCurrImageIndex] = useState(0);
    const [prevImageIndex, setPrevImageIndex] = useState(images.length - 1);
    const [nextImageIndex, setNextImageIndex] = useState(1);


    return (
        <div className='relative'>
            <Swiper

                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={(swiper) => {
                    setCurrImageIndex(swiper.realIndex);
                    setPrevImageIndex(swiper.realIndex == 0 ? images.length - 1 : (swiper.realIndex - 1));
                    setNextImageIndex(swiper.realIndex == images.length - 1 ? 0 : (swiper.realIndex + 1));

                }}
                onSwiper={it => {
                    sliderRef.current = it;
                    setCurrImageIndex(it.realIndex);
                }}
                loop={true}
                className='w-full h-screen bg-red-400'
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
                            className='h-screen w-full '
                            style={{
                                objectFit: "cover"
                            }}
                            fill={true}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Navigation Buttons */}
            <div className="absolute top-[50%] translate-y-[-50%] z-10 w-full">
                <div className="flex flex-row justify-between">
                    <HeroNavigationButton
                        onClick={() => sliderRef.current?.slidePrev()}
                        iconAsset={'/assets/icons/left-arrow.svg'}
                        imageIndex={prevImageIndex}
                        images={images}
                    />
                    <HeroNavigationButton
                        onClick={() => sliderRef.current?.slideNext()}
                        iconAsset={'/assets/icons/right-arrow.svg'}
                        imageIndex={nextImageIndex}
                        images={images}
                    />
                </div>
            </div>
        </div>
    );
}

export default HeroCarousel;

export const HeroNavigationButton = ({
    onClick,
    iconAsset,
    twClass = '',
    imageIndex,
    images,
}) => {
    // console.log(bgHoverImage)

    return (
        <div className={cn(
            'w-40 h-40 rounded-full bg-red-500 text-white relative cursor-pointer overflow-hidden',
            twClass
        )}
            onClick={onClick}
        >
            <Image src={iconAsset} alt='icon' width={10000} height={10000} className='absolute'></Image>
            <Image
                key={images[imageIndex]} 
                className='absolute z-20'
                // src={bgHoverImage}
                src={images[imageIndex]}
                alt='image'
                style={{
                    objectFit: "cover"
                }}
                fill={true}
            />
        </div>
    )
}
