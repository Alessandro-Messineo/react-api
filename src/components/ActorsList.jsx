import { useState, useEffect } from "react";

export default function ActorsList() {

    const [actors, sedActors] = useState([]);

    function fetchActors() {
        axios.get("https://lanciweb.github.io/demo/api/actors/")
            .then((res) => sedActors(res.data))
            .catch(error => console.log(error)
            )
    }

    useEffect(() => {
        fetchActors()
    }
        , [])

    return (
        <div className="container">
            {actors.map((actor, index) => (
                <div className="actor-card" key={index}>
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

            ))}
        </div>
    )
}