import React from 'react'; // Make sure React is imported
import FilmCard from "../Film/FilmCard";
import FilmCardSimple from "../Film/FilmCardSimple";

export default function Desktop({ filmsDeLaSemaine, selectedFilm, setSelectedFilm }) {
    return (
        <>
            <div className='grid grid-cols-1 gap-4'>
                {selectedFilm && <FilmCard {...selectedFilm} />}
            </div>
            <div className="grid grid-cols-4 gap-4 pt-4">
                {filmsDeLaSemaine.map(film => (
                    <div
                        key={film.id}
                        onMouseEnter={() => setSelectedFilm(film)}
                    >
                        <FilmCardSimple {...film} isSelected={selectedFilm && selectedFilm.id === film.id} />
                    </div>
                ))}
            </div>
        </>
    );
}
