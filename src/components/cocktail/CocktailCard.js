import React from "react";
import { Link } from "react-router-dom";
import "./Cocktail.css"

export const CocktailCard = ({cocktail}) => {
    
    return (
        <div className="cocktail-card">
            <Link to={`/cocktails/${cocktail.id}`}><h3>{cocktail.name}</h3></Link>
            <div className="cocktail-card-img-wrapper">
                <img className="cocktail-card-img" src={cocktail.img_url} />
            </div>
            <div className="card-info">
                <p className="cocktail-card-description">{cocktail.description}</p>
            </div>
        </div>
    )
}