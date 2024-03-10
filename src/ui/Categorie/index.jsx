import React, { useState, useEffect } from 'react';
import FilmCardSimple from '../Film/FilmCardSimple';

export default function Categories({ films }) {
    const [currentCategory, setCurrentCategory] = useState('');
    const [filteredFilms, setFilteredFilms] = useState([]);

    // Extract unique categories from films
    const categories = [...new Set(films.map(film => film.categorie))];

    useEffect(() => {
        // Filter films based on the current category
        setFilteredFilms(currentCategory ? films.filter(film => film.categorie === currentCategory) : films);
    }, [currentCategory, films]);

    return (
        <div>
            <h2 className='title-style'>Categories</h2>
            <ul className='px-6 lg:px-28 flex gap-2 list-none flex-wrap'>
                {/* "Tout" button for clearing the filter */}
                <li>
                    <button
                        className={`border-2 border-foreground rounded-full py-1 px-4 hover:bg-foreground hover:text-background ${currentCategory === '' ? 'bg-foreground text-background' : ''}`}
                        onClick={() => setCurrentCategory('')}>
                        Tout
                    </button>
                </li>
                {/* Category buttons */}
                {categories.map(category => (
                    <li key={category}>
                        <button
                            className={`border-2 border-foreground rounded-full py-1 px-4 hover:bg-foreground hover:text-background ${currentCategory === category ? 'bg-foreground text-background' : ''}`}
                            onClick={() => setCurrentCategory(category)}>
                            {category}
                        </button>
                    </li>
                ))}
            </ul>
            <ul className='grid grid-cols-1 px-6 py-4 lg:grid-cols-4 gap-4 lg:px-28 lg:py-6'>
                {/* List of films for the selected category */}
                {filteredFilms.map(film => (
                    <li key={film.id}>
                        <FilmCardSimple {...film} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
