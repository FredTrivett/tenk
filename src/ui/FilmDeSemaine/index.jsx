import React, { useState, useEffect } from 'react';
import FilmCard from "../Film/FilmCard";
import FilmCardSimple from "../Film/FilmCardSimple";

export default function FilmDeSemaine({ films }) {
    // Filter films to include only those with film_de_semaine = true
    const filmsDeLaSemaine = films.filter(film => film.film_de_semaine);

    // Initialize selectedFilm with the first film from the filtered list
    const [selectedFilm, setSelectedFilm] = useState(filmsDeLaSemaine[0]);

    // Update selectedFilm when films prop changes to ensure it always has a valid film
    useEffect(() => {
        setSelectedFilm(filmsDeLaSemaine[0]);
    }, [films]);

    return (
        <section className='px-28'>
            <h2 className='lg:text-8xl text-6xl pb-6 pt-10 font-semibold px-6 lg:px-0 lg:pb-12 lg:pt-20'>
                Film de la semaine
            </h2>
            <div className='grid grid-cols-1 gap-4'>
                {selectedFilm && <FilmCard {...selectedFilm} />}
            </div>
            <div className="grid grid-cols-4 gap-4 pt-4">
                {filmsDeLaSemaine.map(film => (
                    <div
                        key={film.id}
                        onMouseEnter={() => setSelectedFilm(film)} // Update state on hover
                    >
                        <FilmCardSimple {...film} isSelected={selectedFilm && selectedFilm.id === film.id} />
                    </div>
                ))}
            </div>
        </section>
    );
}
