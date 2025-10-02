import { useState, useEffect } from "react";
import ActorsCard from "./ActorsCard";

export default function ActorsList() {

    const [actors, setActors] = useState([]);

    function fetchActors() {
        axios.get("https://lanciweb.github.io/demo/api/actors/")
            .then((res) => setActors(res.data))
            .catch(error => console.log(error)
            )
    }

    useEffect(() => {
        fetchActors()
    }, [])

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