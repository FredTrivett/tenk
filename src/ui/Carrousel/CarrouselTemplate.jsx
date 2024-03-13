import React from 'react';
import PlayIcon from '../DesignSytem/Icons/Play';
import Button from '../DesignSytem/Buttons';

const CarouselTemplate = ({ film }) => {
    return (
        <div className="flex justify-center items-center h-full relative flex-col">
            <img src={film.image_url} alt={film.nom} className="object-cover h-full lg:w-full grayscale -z-10 top-0 bottom-0 left-0 right-0" />
            <div className='absolute top-0 left-0 w-full h-full bg-primary z-0 mix-blend-multiply'></div>
            <div className='absolute h-full lg:w-4/6 top-0 z-40 lg:px-28 lg:left-0 lg:pt-10 flex flex-col gap-2 justify-between pb-20'>
                <h2 className="text-6xl lg:text-8xl text-background font-semibold mt-2  text-shadow-xl">Regardez {film.nom} de {film.realisateur}</h2>
                <Button intent='square'>
                    <PlayIcon />
                    Voir tous les films
                </Button>
            </div>
        </div>
    );
};

export default CarouselTemplate;
