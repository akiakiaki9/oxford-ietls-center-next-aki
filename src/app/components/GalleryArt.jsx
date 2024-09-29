'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight, FaDownload } from 'react-icons/fa';
import 'swiper/swiper-bundle.css';
import GALLERY from '../utils/gallery';
import Image from 'next/image';
import '../styles/gallery.css';

export default function GalleryArt() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const openCarousel = (index) => {
        setCurrentSlide(index);
        setIsOpen(true);
    };

    const closeCarousel = () => {
        setIsOpen(false);
    };

    const downloadImage = (url) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = `Image_${currentSlide + 1}.jpg`; // Задать имя скачиваемого файла
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <div className="gallery">
                {GALLERY.map((item, index) => (
                    <Image
                        key={item.id}
                        src={item.photo}
                        alt={`Gallery Image ${item.id}`}
                        className="gallery-image"
                        onClick={() => openCarousel(index)}
                        width={'500px'} height={'500px'}
                    />
                ))}
            </div>

            {isOpen && (
                <div className="carousel-overlay">
                    {/* Кнопка для скачивания изображения */}
                    <button className="download-button" onClick={() => downloadImage(GALLERY[currentSlide].photo)}>
                        <FaDownload />
                    </button>
                    {/* Кнопка для закрытия карусели */}
                    <button className="close-button" onClick={closeCarousel}>×</button>
                    <Swiper
                        initialSlide={currentSlide}
                        spaceBetween={10}
                        slidesPerView={1}
                        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Navigation]}
                    >
                        {GALLERY.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Image src={item.photo} alt={`Slide ${item.id}`} className="carousel-image" width={'500px'} height={'500px'} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-button-prev">
                        <FaChevronLeft />
                    </div>
                    <div className="swiper-button-next">
                        <FaChevronRight />
                    </div>
                    <div className="slide-counter">
                        {currentSlide + 1} / {GALLERY.length}
                    </div>
                </div>
            )}
        </div>
    );
}
