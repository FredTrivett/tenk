import React, { useState } from 'react';
import FilmCardDesktop from '../Film/FilmCardDesktop';
import FilmCardSimple from '../Film/FilmCardSimple';

export default function FilmCollection({ films }) {
    const [selectedFilm, setSelectedFilm] = useState(films[0]);

    return (
        <div className='px-28 flex flex-col gap-4'>
            <FilmCardDesktop {...selectedFilm} />

            <div className='grid grid-cols-4 gap-4'>
                {films.slice(0, 6).map((film) => (
                    <div key={film.id} onMouseEnter={() => setSelectedFilm(film)}>
                        <FilmCardSimple {...film} />
                    </div>
                ))}
            </div>
        </div>
    );
}
