import React, { useState, useEffect } from 'react';
import Desktop from './desktop'; // Make sure the import path is correct

export default function FilmDeSemaine({ films }) {
    const filmsDeLaSemaine = films.filter(film => film.film_de_semaine);
    const [selectedFilm, setSelectedFilm] = useState(filmsDeLaSemaine[0]);

    useEffect(() => {
        setSelectedFilm(filmsDeLaSemaine[0]);
    }, [films]);

    return (
        <section className='md:px-8 lg:px-28'>
            <h2 className='lg:text-8xl text-6xl pb-6 pt-10 font-semibold lg:pb-12 lg:pt-20'>
                Film de la semaine
            </h2>
            <Desktop filmsDeLaSemaine={filmsDeLaSemaine} selectedFilm={selectedFilm} setSelectedFilm={setSelectedFilm} />
        </section>
    );
}
