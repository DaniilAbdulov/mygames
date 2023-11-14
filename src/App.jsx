import React, { useState } from "react";
import "./App.css";
import GamesList from "./components/Games/GamesList";
import Header from "./components/HeaderAndFooter/Header";
import Footer from "./components/HeaderAndFooter/Footer";
import SearchBar from "./components/UI/SearchBar";
import Up from "./components/UI/Up";

function App() {
    const [searchValue, setSearchValue] = useState("");
    const handleSearchValueChange = (value) => {
        setSearchValue(value);
    };
    return (
        <div className="App">
            <Header />
            <main className="main">
                <div className="container">
                    <SearchBar
                        value={searchValue}
                        onSearchValueChange={handleSearchValueChange}
                    />
                    <GamesList value={searchValue} />
                </div>
            </main>
            <Up />
            <Footer />
        </div>
    );
}

export default App;
