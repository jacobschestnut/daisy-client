import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./Home.css"

export const Home = () => {
    return (
        <div className="home">

            <Link to={`/cocktails`} id="cocktail-list-card" className="home-card">
                Cocktails
            </Link>

            <Link to={`/cocktails`} id="quiz-card" className="home-card">
                Quiz
            </Link>

            <Link to={`/cocktails`} id="random-cocktail-card" className="home-card">
                I Just Need A Drink
            </Link>

        </div>
    )
}