import React from 'react';
import Nav from '../ui/NavBar';
import { useLoaderData } from 'react-router-dom';
import FilmCard from '../ui/Film/FilmCard';

export default function Root() {
  const films = useLoaderData();

  return (
    <>
      <Nav />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {films.map((film) => (
          <FilmCard key={film.id} {...film} />
        ))}
      </div>
    </>
  );
}
