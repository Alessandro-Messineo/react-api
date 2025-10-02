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
        <>
            {actors.map((actor) => (
                <div className="character" >
                    <div>
                        <img src={actor.image} alt={actor.name} />
                    </div>
                    <div>
                        <p>{actor.name}</p>
                        <p>Anno di nascita:{actor.birth_year}</p>
                        <p>Nazionalità: {actor.nationality}</p>
                        <p>Biografia: {actor.biography}</p>
                        <p>Riconoscimenti: {actor.awards}</p>
                    </div>
                </div>
            ))}
        </>
    )
}