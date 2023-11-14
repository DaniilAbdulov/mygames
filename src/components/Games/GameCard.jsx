import { useState } from "react";
import "./GameCard.css";
import { ReactComponent as Steam } from "../../asserts/icons/steam.svg";
import { ReactComponent as Epic } from "../../asserts/icons/epic.svg";
import noPhoto from "../../asserts/icons/no_photo.webp";

function GameCard({ game }) {
    const { front, isFromSteam, login } = game;
    const [imgIsLoading, setImgIsLoading] = useState(false);
    const image = new Image();
    image.onload = () => {
        setImgIsLoading(true);
    };
    image.onerror = () => {
        console.log("Произошла ошибка при загрузке изображения.");
    };
    image.src = front.img ? front.img : noPhoto;
    return (
        <div className="card">
            <div className="card__image">
                {imgIsLoading ? (
                    <img src={image.src} alt="" />
                ) : (
                    <>
                        <span className="loader"></span>
                    </>
                )}
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
