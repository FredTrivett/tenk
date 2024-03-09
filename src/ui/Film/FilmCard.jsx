// FilmCard.js
import React from 'react';

function FilmCard({ nom, realisateur, imageURL }) {
    return (
        <div className="card bg-white shadow-lg rounded overflow-hidden">
            <img src={imageURL} alt={nom} className="w-full h-auto" />
            <div className="p-4">
                <h5 className="text-xl font-bold">{nom}</h5>
                <p className="text-gray-800">{realisateur}</p>
            </div>
        </div>
    );
}

export default FilmCard;
