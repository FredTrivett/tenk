import React from 'react';
import FilmDeSemaineMobile from './FilmDeSemaineMobile';
import FilmDeSemaineDesktop from './FilmDeSemaineDesktop';

export default function FilmDeSemaine({ films }) {
    const isMobile = window.screen.width <= 768; // Check if the screen width is less than or equal to 768

    // Filter films to include only those with film_de_semaine set to true
    const filmsDeLaSemaine = films.filter(film => film.film_de_semaine);

    return (
        <>
            <h2 className='title-style'>
                Film de la semaine
            </h2>
            {isMobile ? (
                // Pass filtered films as a prop to FilmDeSemaineMobile
                <FilmDeSemaineMobile films={filmsDeLaSemaine} />
            ) : (
                // Pass filtered films as a prop to FilmDeSemaineDesktop
                <FilmDeSemaineDesktop films={filmsDeLaSemaine} />
            )}
        </>
    );
}
