'use client'
import React, { useEffect, useRef, useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { cn } from "@/utils/cn";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Image from 'next/image';

// import required modules
import {
    Autoplay,
    Pagination,
    Navigation,
    Keyboard,
    Mousewheel,
    EffectFade,
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
    const sliderRef = useRef<SwiperClass>(null);
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
    const [hoveredLeftNav, setHoveredLeftNav] = useState(false)
    const [hoveredRightNav, setHoveredRightNav] = useState(false)

    const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const parallaxContainer = document.getElementsByClassName('parallaxContainer');

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            Array.from(parallaxContainer).forEach((element: HTMLElement) => {
                element.style.transform = `translateY(${scrollPosition * 0.5}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);



    return (
        <div className='relative'>
            <Swiper
                effect={'fade'}
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={(swiper) => {
                    updateIndices(swiper.realIndex);
                }}
                onSwiper={(swiper) => {
                    sliderRef.current = swiper;
                    updateIndices(swiper.realIndex);
                }}
                loop={true}
                className='w-full h-screen bg-red-400 relative transition-opacity ease-in-out parallaxContainer'
                speed={1000}
                pagination={{ clickable: true }} // Update pagination prop
                autoplay={{
                    delay: 5500,
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
                modules={[Autoplay, Pagination, Navigation, EffectFade, Keyboard, Mousewheel]} // Remove unnecessary modules
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className='absolute top-0 left-0 opacity-0 z-[-10]'>
                        <Image
                            src={image}
                            alt="image"
                            className='h-screen w-full'
                            style={{
                                objectFit: "cover"
                            }}
                            fill={true}
                            loading='lazy'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>


            {/* Navigation Buttons */}
            <div className="absolute top-[50%] translate-y-[-50%] z-10 w-full">
                <div className="flex flex-row justify-between parallaxContainer">
                    <HeroNavigationButton
                        key={`prev-${indexes.prev}`}
                        onClick={() => sliderRef.current?.slidePrev()}
                        iconAsset={'/assets/icons/left-arrow.svg'}
                        imageIndex={indexes.prev}
                        images={images}
                        hovered={hoveredLeftNav}
                        setHovered={setHoveredLeftNav}
                        twClass='ml-3 '
                        height={windowWidth < 768 ? 60 : 70}
                        width={windowWidth < 768 ? 60 : 70}
                        imageOffsetSide='left'
                    />
                    <HeroNavigationButton
                        key={`next-${indexes.next}`}
                        onClick={() => sliderRef.current?.slideNext()}
                        iconAsset={'/assets/icons/right-arrow.svg'}
                        imageIndex={indexes.next}
                        images={images}
                        hovered={hoveredRightNav}
                        setHovered={setHoveredRightNav}
                        twClass='mr-3'
                        height={windowWidth < 768 ? 60 : 70}
                        width={windowWidth < 768 ? 60 : 70}
                        imageOffsetSide='right'
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
    height = 100,
    width = 100,
    hovered,
    setHovered,
    imageOffsetSide = 'none'
}:{
    onClick: () => void,
    iconAsset: string,
    twClass?: string,
    imageIndex: number,
    images: string[],
    height?: number,
    width?: number,
    hovered: boolean,
    setHovered: (value: boolean) => void,
    imageOffsetSide?: 'none' | 'left' | 'right'
}) => {


    return (
        <div className={cn(
            'rounded-full text-white relative cursor-pointer overflow-hidden',
            twClass
        )}
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                height,
                width,
            }}
        >
            <Image
                key={images[imageIndex]}
                className={cn(
                    'absolute z-20 transition-all duration-500 ease-out transform rounded-full',
                    hovered ? `opacity-100 scale-100 translate-x-0` : cn(
                        'opacity-0 scale-0',
                        imageOffsetSide === 'left' ? 'translate-x-[-50%]' : imageOffsetSide === 'right' ? 'translate-x-[50%]' : 'translate-x-0',
                    ),
                )}
                // src={bgHoverImage}
                src={images[imageIndex]}
                alt={images[imageIndex]}
                style={{
                    objectFit: "cover",
                    // translate: imageOffsetOnside ? `40px` : 0
                }}
                fill={true}
            />
            <Image src={iconAsset} alt='icon' width={10000} height={10000} className='absolute z-30'></Image>
            <div style={{
                width: 10000,
                height: 10000,
            }} className='absolute bg-black opacity-35'></div>
        </div>
    )
}
