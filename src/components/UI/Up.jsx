import { useEffect, useState } from "react";
import { ReactComponent as UpArrow } from "../../asserts/icons/up-arrow.svg";
function Up() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    function clickHandler() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }
    return (
        <>
            {scrollPosition > 150 ? (
                <div className="up">
                    <button onClick={clickHandler}>
                        <UpArrow />
                    </button>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}
export default Up;
