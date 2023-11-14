import React, { useState } from "react";
import "./App.css";
import GamesList from "./components/Games/GamesList";
import NavBar from "./components/NavBarAndFooter/NavBar";
import Footer from "./components/NavBarAndFooter/Footer";
import SearchBar from "./components/UI/SearchBar";

function App() {
    const [searchValue, setSearchValue] = useState("");
    const handleSearchValueChange = (value) => {
        setSearchValue(value);
    };
    return (
        <div className="App">
            <NavBar />
            <main className="main">
                <div className="container">
                    <SearchBar
                        value={searchValue}
                        onSearchValueChange={handleSearchValueChange}
                    />
                    <GamesList value={searchValue} />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
