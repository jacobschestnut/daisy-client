import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCocktailById, getCocktailIngredients } from "./CocktailManager"
import "./Cocktail.css"

export const CocktailDetails = () => {
    const params = useParams()
    const [cocktailId, setCocktailId] = useState(parseInt(params.cocktailId));
    const [cocktail, setCocktail] = useState({});
    const [cocktailIngredients, setCocktailIngredients] = useState([]);

    useEffect(() => {

        getCocktailById(cocktailId).then((cocktail) => {
            setCocktail(cocktail);
        })

        getCocktailIngredients().then((ingredients) => {
            setCocktailIngredients(ingredients);
        })

    }, []);

    return (
        <div className="main">
            <div className="cocktail">
                <h3>{cocktail.name}</h3>
                <div className="cocktail-img-wrapper">
                    <img className="cocktail-img" src={cocktail.img_url} />
                </div>
                <div className="cocktail-info">
                    <p className="cocktail-description">{cocktail.description}</p>
                    <div className="ingredients">
                        {cocktailIngredients.map(ingredient => {
                            if (ingredient.ingredient?.type.id == 1)
                                return(
                                    <div className="ingredient" key={ingredient.id}>
                                        <div id="spacer-right">
                                            <p>{parseFloat(ingredient.amount)}</p>
                                            <p>{ingredient.unit.label}</p>
                                        </div>
                                        <div id="spacer-left">
                                            <p>{ingredient.ingredient.name}</p>
                                        </div>
                                    </div>
                                )
                        })}
                    </div>
                    <div className="ingredients">
                        {cocktailIngredients.map(ingredient => {
                            if (ingredient.ingredient?.type.id == 2)
                                return(
                                    <div className="ingredient" key={ingredient.id} >
                                        <div id="spacer-right">
                                            <p>{parseFloat(ingredient.amount)}</p>
                                            <p>{ingredient.unit.label}</p>
                                        </div>
                                        <div id="spacer-left">
                                        <p>{ingredient.ingredient.name}</p>
                                        </div>
                                    </div>
                                )
                        })}
                    </div>
                    <div className="ingredients">
                        {cocktailIngredients.map(ingredient => {
                            if (ingredient.ingredient?.type.id == 7)
                                return(
                                    <div className="ingredient" key={ingredient.id}>
                                        <div id="spacer-right">
                                            <p>{parseFloat(ingredient.amount)}</p>
                                            <p>{ingredient.unit.label}</p>
                                        </div>
                                        <div id="spacer-left">
                                            <p>{ingredient.ingredient.name}</p>
                                        </div>
                                    </div>
                                )
                        })}
                    </div>
                    <div className="ingredients">
                        {cocktailIngredients.map(ingredient => {
                            if (ingredient.ingredient?.type.id == 6)
                                return(
                                    <div className="ingredient" key={ingredient.id}>
                                        <div id="spacer-right">
                                            <p>{parseFloat(ingredient.amount)}</p>
                                            <p>{ingredient.unit.label}</p>
                                        </div>
                                        <div id="spacer-left">
                                            <p>{ingredient.ingredient.name}</p>
                                        </div>
                                    </div>
                                )
                        })}
                    </div>
                    <div className="ingredients">
                        {cocktailIngredients.map(ingredient => {
                            if (ingredient.ingredient?.type.id == 5)
                                return(
                                    <div className="ingredient" key={ingredient.id}>
                                        <div id="spacer-right">
                                            <p>{parseFloat(ingredient.amount)}</p>
                                            <p>{ingredient.unit.label}</p>
                                        </div>
                                        <div id="spacer-left">
                                            <p>{ingredient.ingredient.name}</p>
                                        </div>
                                    </div>
                                )
                        })}
                    </div>
                    <div className="ingredients">
                        {cocktailIngredients.map(ingredient => {
                            if (ingredient.ingredient?.type.id == 3)
                                return(
                                    <div className="ingredient" key={ingredient.id}>
                                        <div id="spacer-right">
                                            <p>{parseFloat(ingredient.amount)}</p>
                                            <p>{ingredient.unit.label}</p>
                                        </div>
                                        <div id="spacer-left">
                                            <p>{ingredient.ingredient.name}</p>
                                        </div>
                                    </div>
                                )
                        })}
                    </div>
                    <div className="ingredients">
                        {cocktailIngredients.map(ingredient => {
                            if (ingredient.ingredient?.type.id == 4)
                                return(
                                    <div className="ingredient" key={ingredient.id}>
                                        <div id="spacer-right">
                                            <p>{parseFloat(ingredient.amount)} </p>
                                            <p>{ingredient.unit?.label}</p>
                                        </div>
                                        <div id="spacer-left">
                                            <p>{ingredient.ingredient.name}</p>
                                        </div>
                                    </div>
                                )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}