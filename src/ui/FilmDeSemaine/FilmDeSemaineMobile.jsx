import React from 'react'; // Ensure React is imported
import FilmCardMobile from "../Film/FilmCardMobile";

export default function HomePageMobile({ films }) { // Destructure films from props
    return ( // Add return statement to render the JSX
        <ul className="grid grid-cols-1 gap-4 px-6 ">
            {films.map((film) => (
                <li key={film.id}>
                    <FilmCardMobile {...film} />
                </li>
            ))}
        </ul>
    );
}
