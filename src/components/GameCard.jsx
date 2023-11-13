import "./GameCard.css";
import { ReactComponent as Steam } from "../asserts/icons/steam.svg";
import { ReactComponent as Epic } from "../asserts/icons/epic.svg";
import no_photo from "../asserts/icons/no_photo.webp";

function GameCard({ game }) {
    const { front, isFromSteam, login } = game;
    return (
        <div className="card">
            <div className="card__image">
                <img src={front.img ? front.img : no_photo} alt="" />
            </div>
            <div className="card__title">{front.title}</div>
            <div className="card__info">
                <div className="card__logo">
                    {isFromSteam ? <Steam /> : <Epic />}
                </div>

                <p className="card__login">Login: {login}</p>
            </div>
        </div>
    );
}
export default GameCard;
