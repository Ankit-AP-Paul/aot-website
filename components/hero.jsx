'use client'
import React, { useRef, useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { cn } from "@/utils/cn";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
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
    "/assets/images/carousel1.jpg",
    "/assets/images/carousel2.jpg",
    "/assets/images/carousel3.jpg",
    "/assets/images/carousel4.jpg",
    "/assets/images/carousel5.jpg",
]

const HeroCarousel = () => {
    const sliderRef = useRef();
    const [indexes, setIndexes] = useState({
        curr: 0,
        prev: images.length - 1,
        next: 1,
    });
    
    // Update function that sets all indices at once
    const updateIndices = (current) => {
        setIndexes({
            curr: current,
            prev: current === 0 ? images.length - 1 : current - 1,
            next: current === images.length - 1 ? 0 : current + 1,
        });
    };
    
    


    return (
        <div className='relative'>
            <Swiper

                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={(swiper) => {
                    updateIndices(swiper.realIndex)

                }}
                onSwiper={it => {
                    sliderRef.current = it;
                    updateIndices(it.realIndex)
                }}
                loop={true}
                className='w-full h-screen bg-red-400'
                pagination={true} // Add pagination prop
                // autoplay={{
                //     delay: 3500,
                //     disableOnInteraction: false,
                //     pauseOnMouseEnter: true,
                // }}
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
                        key={`prev-${indexes.prev}`}
                        onClick={() => sliderRef.current?.slidePrev()}
                        iconAsset={'/assets/icons/left-arrow.svg'}
                        imageIndex={indexes.prev}
                        images={images}
                    />
                    <HeroNavigationButton
                        key={`next-${indexes.next}`}
                        onClick={() => sliderRef.current?.slideNext()}
                        iconAsset={'/assets/icons/right-arrow.svg'}
                        imageIndex={indexes.next}
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
                alt={images[imageIndex]}
                style={{
                    objectFit: "cover"
                }}
                fill={true}
            />
        </div>
    )
}
