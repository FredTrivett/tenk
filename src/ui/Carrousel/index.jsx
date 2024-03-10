// Carousel.jsx
import React, { useState, useEffect } from 'react';
import CarouselTemplate from './CarrouselTemplate';

const Carousel = ({ films }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Filter films to get those with "mise_en_avant": true
    const highlightedFilms = films.filter(film => film.mise_en_avant);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide(currentSlide => (currentSlide + 1) % highlightedFilms.length);
        }, 5000);

        return () => clearInterval(slideInterval);
    }, [highlightedFilms.length]);

    return (
        <div className="relative h-[75vh]">
            <div className="overflow-hidden">
                {highlightedFilms.map((film, index) => (
                    <div key={film.id} className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                        <CarouselTemplate film={film} />
                    </div>
                ))}
            </div>
            <div className="absolute bottom-0 left-1/2 p-4 gap-2 transform -translate-x-1/2 flex space-x-2">
                {highlightedFilms.map((_, index) => (
                    <button
                        key={index}
                        className={`h-5 w-5 border-background border-2 rounded-full ${index === currentSlide ? 'bg-background' : 'bg-none'}`}
                        onClick={() => setCurrentSlide(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
