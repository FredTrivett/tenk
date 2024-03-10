// FilmCard.js
import React, { useState } from 'react';

function FilmCardMobile({ nom, realisateur, image_url, description, categorie, disponibilite, duree }) {
    // State to control the visibility of the details
    const [showDetails, setShowDetails] = useState(false);

    // Toggle the visibility
    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <section className='grid md:grid-cols-2 gap-3'>
            {/* Clickable card to toggle details */}
            <div className="card bg-white relative overflow-hidden group cursor-pointer" onClick={toggleDetails}>
                <img src={image_url} alt={nom} className="w-full h-auto z-0 group-hover:grayscale" />
                <div className="absolute top-0 left-0 w-full h-full bg-primary z-10 mix-blend-multiply opacity-0 group-hover:opacity-100"></div>
                <div className="px-3 py-2 z-40 top-0 absolute">
                    <h5 className="text-xl text-shadow-xl tracking-wider text-background">{nom}</h5>
                    <p className="text-background text-shadow-xl text-xs tracking-wide font-light ">{realisateur}</p>
                </div>
            </div>

            {/* Conditional rendering based on showDetails state */}
            {showDetails && (
                <div className='border-y-2 border-foreground'>
                    <ul className='flex gap-5 py-4'>
                        <li className='flex gap-2 items-center'>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3_1994)">
                                    <path d="M12.5 24.0385C18.8725 24.0385 24.0385 18.8725 24.0385 12.5C24.0385 6.12748 18.8725 0.961533 12.5 0.961533C6.12749 0.961533 0.961548 6.12748 0.961548 12.5C0.961548 18.8725 6.12749 24.0385 12.5 24.0385Z" stroke="black" stroke-width="1.92308" />
                                    <path d="M12.5 5.48283V12.2136H5.5885" stroke="black" stroke-width="1.92308" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3_1994">
                                        <rect width="25" height="25" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <p className='w-max'>{duree} min</p>
                        </li>
                        <li className='flex gap-2 items-center'>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3_1993)">
                                    <path d="M17.3134 23.0742C17.6787 23.0849 18.04 22.9955 18.3582 22.8155C18.6763 22.6356 18.9392 22.372 19.1182 22.0534C19.2966 21.7482 19.3805 21.397 19.3594 21.0442C19.3383 20.6914 19.2132 20.3527 18.9998 20.0709L14.2989 13.5867L13.5129 12.5025L14.2989 11.4184L18.9998 4.93516C19.2132 4.65341 19.3383 4.31471 19.3594 3.96188C19.3805 3.60904 19.2966 3.25789 19.1182 2.95274C18.9392 2.6341 18.6763 2.37052 18.3582 2.19057C18.04 2.01063 17.6787 1.92119 17.3134 1.93191H7.68495C7.31961 1.92119 6.95831 2.01063 6.64017 2.19057C6.32203 2.37052 6.05918 2.6341 5.88013 2.95274C5.70176 3.25789 5.61784 3.60904 5.63891 3.96188C5.65999 4.31471 5.78511 4.65341 5.99854 4.93516L10.6995 11.4184L11.4855 12.5036L10.6995 13.5887L5.99854 20.073C5.78511 20.3547 5.65999 20.6934 5.63891 21.0462C5.61784 21.3991 5.70176 21.7503 5.88013 22.0554C6.05918 22.3741 6.32203 22.6376 6.64017 22.8176C6.95831 22.9975 7.31961 23.087 7.68495 23.0762H17.3134M17.3134 24.9995H7.68495C6.96818 25.0379 6.25497 24.8748 5.6262 24.5285C4.99743 24.1823 4.47826 23.6668 4.12755 23.0405C3.77684 22.4142 3.60862 21.7022 3.64197 20.9851C3.67532 20.2681 3.90891 19.5748 4.31624 18.9837L9.01712 12.4995L4.31624 6.01621C3.90891 5.42517 3.67532 4.73183 3.64197 4.01481C3.60862 3.29778 3.77684 2.58577 4.12755 1.95948C4.47826 1.33319 4.99743 0.817702 5.6262 0.471453C6.25497 0.125205 6.96818 -0.0379396 7.68495 0.000511785H17.3134C18.0302 -0.0379396 18.7434 0.125205 19.3721 0.471453C20.0009 0.817702 20.5201 1.33319 20.8708 1.95948C21.2215 2.58577 21.3897 3.29778 21.3564 4.01481C21.323 4.73183 21.0894 5.42517 20.6821 6.01621L15.9812 12.4995L20.6821 18.9837C21.0888 19.5748 21.3219 20.2679 21.355 20.9846C21.388 21.7013 21.2197 22.4129 20.869 23.0389C20.5184 23.6648 19.9995 24.18 19.3711 24.5262C18.7426 24.8724 18.0298 25.0356 17.3134 24.9974V24.9995Z" fill="black" />
                                    <path d="M15.6402 21.641H9.3591C9.02868 21.6411 8.70705 21.5343 8.4423 21.3366C8.17755 21.1389 7.98386 20.8609 7.89014 20.544C7.79643 20.2272 7.80773 19.8885 7.92235 19.5786C8.03697 19.2687 8.24876 19.0041 8.5261 18.8245L11.6672 16.791C11.9151 16.6304 12.2042 16.545 12.4996 16.545C12.7951 16.545 13.0842 16.6304 13.3322 16.791L16.4732 18.8245C16.7506 19.0041 16.9624 19.2687 17.077 19.5786C17.1916 19.8885 17.2029 20.2272 17.1092 20.544C17.0155 20.8609 16.8217 21.1389 16.557 21.3366C16.2922 21.5343 15.9707 21.6411 15.6402 21.641Z" fill="black" />
                                    <path d="M12.4992 10.3884C12.2579 10.3883 12.0201 10.3312 11.8051 10.2218C11.5901 10.1123 11.404 9.95361 11.2619 9.75858L10.431 8.61728C10.2646 8.38886 10.1648 8.11886 10.1424 7.83718C10.12 7.55549 10.176 7.2731 10.3042 7.02128C10.4324 6.76945 10.6277 6.55799 10.8687 6.41033C11.1096 6.26268 11.3867 6.18458 11.6693 6.18466H13.3301C13.6126 6.18477 13.8896 6.26301 14.1304 6.41074C14.3711 6.55847 14.5664 6.76992 14.6944 7.02171C14.8225 7.27351 14.8784 7.55583 14.856 7.83743C14.8336 8.11902 14.7337 8.38893 14.5674 8.61728L13.7375 9.75858C13.5953 9.95375 13.4091 10.1125 13.1939 10.222C12.9787 10.3315 12.7406 10.3885 12.4992 10.3884Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3_1993">
                                        <rect width="25" height="25" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <p className='w-max'>{typeof disponibilite === 'number' ? `${disponibilite} jours` : disponibilite}</p>
                        </li>
                        <li className='flex gap-2 items-center'>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.4728 12.4972L6.56097 6.83337L6.56097 18.1611L16.4728 12.4972ZM20.3751 12.4972L4.62486 21.4974L4.62486 3.4971L20.3751 12.4972Z" fill="black" />
                            </svg>
                            <p>Bande - annonce</p>
                        </li>
                    </ul>
                    <p className='pb-4'>{description}</p>
                    <p className='text-secondary pb-2'>{categorie}</p>
                </div>
            )}
        </section>
    );
}

export default FilmCardMobile;
