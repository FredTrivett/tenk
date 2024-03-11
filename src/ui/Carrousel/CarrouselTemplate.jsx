// CarouselTemplate.jsx
import React from 'react';

const CarouselTemplate = ({ film }) => {
    return (
        <div className="flex justify-center items-center h-full relative flex-col">
            <img src={film.image_url} alt={film.nom} className="object-cover h-full lg:w-full grayscale -z-10 top-0 bottom-0 left-0 right-0" />
            <div className='absolute top-0 left-0 w-full h-full bg-primary z-0 mix-blend-multiply'></div>
            <div className='absolute h-full lg:w-4/6 top-0 z-40 lg:px-28 lg:left-0 lg:pt-10 flex flex-col gap-2 justify-between pb-20'>
                <h2 className="text-6xl lg:text-8xl text-background font-semibold mt-2  text-shadow-xl">Regardez {film.nom} de {film.realisateur}</h2>
                <button className='flex gap-2 border-2 border-background w-fit text-background px-4 py-1 font-light'>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.4728 12.4972L6.56097 6.83337L6.56097 18.1611L16.4728 12.4972ZM20.3751 12.4972L4.62486 21.4974L4.62486 3.4971L20.3751 12.4972Z" fill="white" />
                    </svg>
                    Voir le Trailer</button>
            </div>
        </div>
    );
};

export default CarouselTemplate;
