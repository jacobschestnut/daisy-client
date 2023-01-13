import { useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { getCocktails } from "../fetch/CocktailManager";
import "./Home.css"

export const Home = () => {
    const history = useHistory();
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        getCocktails().then((cocktails) => {
            setCocktails(cocktails);
        })
    }, []);

    return (
        <div className="home">
            <div id="home-btns">
                <Link to={`/quiz`} id="quiz-card" className="home-card">

                        <h3 id="home-card-name">Quiz</h3>

                </Link>

                <Link to={`/cocktails`} id="cocktail-list-card" className="home-card">

                        <h3 id="home-card-name">Cocktails</h3>

                </Link>

                <button to={`/cocktails`} id="random-cocktail-card" className="home-card"
                            onClick={() => {
                                const cocktail = cocktails[Math.floor(Math.random()*cocktails.length)]
                                history.push({ pathname: `/cocktails/${cocktail.id}` })
                            }}>

                        <h3 id="home-card-name">Make Me Anything</h3>

                </button>
            </div>
        </div>
    )
}