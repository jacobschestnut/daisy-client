import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { getCocktails } from "../fetch/CocktailManager.js"
import { CocktailCard } from "./CocktailCard.js"
import "./Cocktail.css"
import "../Daisy.css"

export const CocktailList = () => {
    const history = useHistory();
    const [ cocktails, setCocktails ] = useState([])

    useEffect(() => {
        getCocktails().then(data => setCocktails(data))
    }, [])

    return (
        <>
            {/* <div className="searchWrapper">
                <SearchBar id="searchBar-font" placeholder="Search for cocktails..." data={cocktails}/>
            </div> */}
            <div className="main">
                <div className="cocktails">
                    <section className="cocktail_cards">
                            {cocktails.map(cocktail => <CocktailCard key={cocktail.id} cocktail={cocktail} />)}
                    </section>
                </div>
                <div>
                    <button className="btn"
                        onClick={() => {
                            history.push({ pathname: "/newcocktail" })
                        }}
                    >Add Cocktail</button>
                </div>
            </div>
        </>
    )
}