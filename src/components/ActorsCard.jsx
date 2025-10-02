export default function ActorsCard(props) {
    const { actor } = props;

    return (
        <div className="actor-card">
            <div className="actor-image">
                <img src={actor.image} alt={actor.name} />
            </div>
            <div className="actor-info">
                <h2>{actor.name}</h2>
                <p className="info">Anno di nascita: <span className="info-span">{actor.birth_year}</span></p>
                <p className="info">Nazionalità: <span className="info-span">{actor.nationality}</span></p>
                <p className="info">Biografia: <span className="info-span">{actor.biography}</span></p>
                <p className="info">Riconoscimenti: <span className="info-span">{actor.awards.join(", ")}</span></p>
            </div>
        </div>
    )
}