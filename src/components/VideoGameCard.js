import React from "react";

function VideoGameCard({ game }) {

    function handleSeeDetails() {
        getDetails(game)
    }

    return (
        <div>
            <h3>{game.name}</h3>
            <img src={game.image} />
            <button onClick={handleSeeDetails}>See Details?</button>
        </div>
    )
}

export default VideoGameCard;