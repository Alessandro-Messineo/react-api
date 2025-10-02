import { useState, useEffect } from "react";
import ActorsCard from "./ActorsCard";
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
                <ActorsCard
                    key={index}
                    actor={actor}
                />

            ))}
        </div>
    )
}