import games from "../data/games";
import GameCard from "./GameCard";
import "./GamesList.css";

function GamesList() {
    return (
        <div className="GamesList">
            {games.length > 0 ? (
                games.map((game) => {
                    return <GameCard key={game.id} game={game} />;
                })
            ) : (
                <>
                    <p>No data</p>
                </>
            )}
        </div>
    );
}

export default GamesList;
