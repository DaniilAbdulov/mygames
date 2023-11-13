import React from "react";
import "./App.css";
import GamesList from "./components/GamesList";
import NavBar from "./components/NavBarAndFooter/NavBar";
import Footer from "./components/NavBarAndFooter/Footer";

function App() {
    return (
        <div className="App">
            <NavBar />
            <main className="main">
                <div className="container">
                    <GamesList />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
