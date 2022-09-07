import React from "react";
import { Link } from "react-router-dom";
import "./Cocktail.css"

export const CocktailCard = ({cocktail}) => {
    
    return (
        <Link to={`/cocktails/${cocktail.id}`} id="cocktail-card">
            <h3 id="cocktail-card-name">{cocktail.name}</h3>
            <div className="card-content">
                <div className="cocktail-card-img-wrapper">
                    <img className="cocktail-card-img" src={cocktail.img_url} />
                </div>
                <div className="card-info">
                    <p className="cocktail-card-description">{cocktail.description}</p>
                </div>
            </div>
        </Link>
    )
}