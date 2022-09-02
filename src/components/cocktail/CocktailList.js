import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { getCocktails } from "./CocktailManager.js"
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
            <div className="cocktails">
                <section className="cocktail_cards">
                        {cocktails.map(cocktail => <CocktailCard key={cocktail.id} cocktail={cocktail} />)}
                </section>
            </div>
            <div className="center">
                <button className="btn"
                    onClick={() => {
                        history.push({ pathname: "/cocktails/new" })
                    }}
                >Add Cocktail</button>
            </div>
        </>
    )
}