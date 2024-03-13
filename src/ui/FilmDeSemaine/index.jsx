import React, { useState } from 'react';
import FilmCard from "../Film/FilmCard";
import FilmCardSimple from "../Film/FilmCardSimple";

export default function FilmDeSemaine({ films }) {
    const [selectedFilm, setSelectedFilm] = useState(films[0]);

    return (
        <section className='px-28'>
            <h2 className='lg:text-8xl text-6xl pb-6 pt-10 font-semibold px-6 lg:px-0 lg:pb-12 lg:pt-20'>
                Film de la semaine
            </h2>
            <div className='grid grid-cols-1 gap-4'>
                <FilmCard {...selectedFilm} />
            </div>
            <div className="grid grid-cols-4 gap-4 pt-4">
                {films.map(film => (
                    <div
                        key={film.id}
                        onMouseEnter={() => setSelectedFilm(film)} // Update state on hover
                    >
                        <FilmCardSimple {...film} isSelected={selectedFilm.id === film.id} />
                    </div>
                ))}
            </div>
        </section>
    );
}