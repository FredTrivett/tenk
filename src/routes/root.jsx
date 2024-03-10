import React from 'react';
import Nav from '../ui/NavBar';
import { useLoaderData } from 'react-router-dom';
import FilmDeSemaine from '../ui/FilmDeSemaine/';

export default function Root() {
  const films = useLoaderData();
  const isMobile = window.screen.width <= 768; // Check if the screen width is less than or equal to 768

  return (
    <>
      <Nav />
      <FilmDeSemaine films={films} />
    </>
  );
}
