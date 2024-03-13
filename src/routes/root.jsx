import React from 'react';
import Nav from '../ui/NavBar';
import { useLoaderData } from 'react-router-dom';
import Carrousel from '../ui/Carrousel';
import FilmDeSemaine from '../ui/FilmDeSemaine/';
import Categorie from '../ui/Categorie';

export default function Root() {
  const films = useLoaderData();

  return (
    <>
      <Nav />
      <Carrousel films={films} />
      <FilmDeSemaine films={films} />
      <Categorie films={films} />
    </>
  );
}
