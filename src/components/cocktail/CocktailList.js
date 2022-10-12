import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { getCocktails } from "../fetch/CocktailManager.js"
import { CocktailCard } from "./CocktailCard.js"
import { SearchBar } from "../searchbar/SearchBar"
import "./Cocktail.css"
import "../Daisy.css"

const handleDeleteCocktail = (id) => {
    deleteCocktail(id)
    .then(history.push("/cocktails"));
}

export const CocktailList = () => {
    const history = useHistory();
    const [ cocktails, setCocktails ] = useState([])

    useEffect(() => {
        getCocktails().then(data => setCocktails(data))
        console.log(cocktails)
    }, [])

    return (
        <>
            <div className="searchWrapper">
                <SearchBar id="searchBar-font" placeholder="Search for a cocktail..." data={cocktails}/>
            </div>
            <div className="main">
                    <button className="btn"
                        onClick={() => {
                            history.push({ pathname: "/newcocktail" })
                        }}
                    >Add Cocktail</button>
                </div>
                <div id="cocktails">
                    <section className="cocktail_cards">
                            {cocktails.map(cocktail => <CocktailCard key={cocktail.id} cocktail={cocktail} delete={handleDeleteCocktail}/>)}
                    </section>
                </div>
                <div>
            </div>
        </>
    )
}