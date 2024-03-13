export default function FilmCardSimple({ nom, realisateur, image_url, isSelected }) {
    return (
        <div className="card bg-white relative overflow-hidden group cursor-pointer">
            <img src={image_url} alt={nom} className={`w-full h-auto z-0 ${isSelected ? "grayscale" : ""}`} />
            <div className={`absolute top-0 left-0 w-full h-full bg-primary z-10 mix-blend-multiply ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
            <div className="px-3 py-2 z-40 top-0 absolute">
                <h5 className="text-xl text-shadow-xl tracking-wider text-background">{nom}</h5>
                <p className="text-background text-shadow-xl text-xs tracking-wide font-light ">{realisateur}</p>
            </div>
        </div>
    );
}
