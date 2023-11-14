import games from "../../data/games";
import GameCard from "./GameCard";
import "./GamesList.css";
import kid from "../../asserts/kidwithgame.webp";
function GamesList({ value }) {
    const filteredGames = games.filter((game) => {
        const mathesTitle = game.front.title
            .toLowerCase()
            .includes(value.toLowerCase());

        return mathesTitle;
    });
    return (
        <div className="games">
            {filteredGames.length > 0 ? (
                filteredGames.map((game) => {
                    return <GameCard key={game.id} game={game} />;
                })
            ) : (
                <>
                    <div className="no__data">
                        <p>List of games is empty...</p>
                        <img src={kid} alt="" srcset="" />
                    </div>
                </>
            )}
        </div>
    );
}

export default GamesList;
