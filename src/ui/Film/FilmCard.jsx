import Clock from '../DesignSytem/Icons/Clock';
import Hourglass from '../DesignSytem/Icons/Hourglass';
import Play from '../DesignSytem/Icons/Play';
import PlayFilm from '../DesignSytem/Icons/Play_Film';
import Offrir from '../DesignSytem/Icons/Offrir';

export default function FilmCard({ nom, realisateur, image_url, description, categorie, disponibilite, duree }) {

    return (
        <figure className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className="card bg-white relative overflow-hidden group cursor-pointer">
                <img src={image_url} alt={nom} className="w-full h-auto z-0 " />
                <div className="px-5 py-4 z-40 top-0 absolute">
                    <h5 className="text-4xl text-shadow-xl tracking-wider text-background">{nom}</h5>

                </div>
            </div>
            <div className='border-y-2 border-foreground flex flex-col justify-between'>
                <div>
                    <ul className='flex gap-5 py-4'>
                        <li className='flex gap-2 items-center'>
                            <Clock />
                            <p className='w-max'>{duree} min</p>
                        </li>
                        <li className='flex gap-2 items-center'>
                            <Hourglass />
                            <p className='w-max'>{typeof disponibilite === 'number' ? `${disponibilite} jours` : disponibilite}</p>
                        </li>
                        <li className='flex gap-2 items-center'>
                            <Play />
                            <p>Bande - annonce</p>
                        </li>
                    </ul>
                    <p className='pb-4 text-xl font-[500]'>{description}</p>
                </div>
                <div>
                    <p className='font-[500] text-xl'>Programmé par <span className='text-secondary hover:text-foreground cursor-pointer'>{realisateur}</span></p>
                    <ul className='flex gap-2 py-2'>
                        <li>
                            <a className='text-forground'>
                                <PlayFilm />
                            </a>
                        </li>
                        <li>
                            <a>
                                <Offrir />
                            </a>
                        </li>
                    </ul>
                    <p className='text-secondary pb-2 font-[500]'>{categorie}</p>
                </div>

            </div>

        </figure>
    );
}
