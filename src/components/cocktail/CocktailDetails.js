import React from "react";
import { Link } from "react-router-dom";
import "./Cocktail.css"

export const CocktailDetails = ({cocktail}) => {
    return (
        <div className="cocktail">
            <Link to={`/cocktails/${cocktail.id}`}><h3>{cocktail.name}</h3></Link>
            <div className="cocktail-img-wrapper">
                <img className="cocktail-img" src={cocktail.img_url} />
            </div>
            <div className="cocktail-info">
                <p className="cocktail-description">{cocktail.description}</p>
            </div>
        </div>
    )
}