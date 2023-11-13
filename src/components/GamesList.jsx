import games from "../data/games";
import GameCard from "./GameCard";
import "./GamesList.css";
function GamesList() {
    return (
        <ul className="games">
            {games.length > 0 && (
                <li>
                    {games.map((game) => {
                        return <GameCard game={game} key={game.id} />;
                    })}
                </li>
            )}
        </ul>
    );
}
export default GamesList;
