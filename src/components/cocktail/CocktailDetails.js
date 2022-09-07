import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCocktailById, getCocktailIngredients } from "../fetch/CocktailManager"
import "./Cocktail.css"

export const CocktailDetails = () => {
    const params = useParams()
    const [cocktailId, setCocktailId] = useState(parseInt(params.cocktailId));
    const [cocktail, setCocktail] = useState({});
    const [cocktailIngredients, setCocktailIngredients] = useState([]);
    // const [userId, setUserId] = useState(JSON.parse(localStorage.getItem("userId")));
    const userId = 1

    useEffect(() => {

        getCocktailById(cocktailId).then((cocktail) => {
            setCocktail(cocktail);
        })

        getCocktailIngredients().then((ingredients) => {
            setCocktailIngredients(ingredients);
        })

    }, []);

    let del;
    let edit;
    const deleteAuth = () => {
        if (cocktail.creator?.id == userId) {
            edit = <button className="btn" onClick={() => handleEditCocktail(cocktail.id)}>Edit</button>
            del = <button className="btn" onClick={() => handleDeleteCocktail(cocktail.id)}>Delete</button>
        }
    }

    deleteAuth();

    return (
        <div className="main">
            <div className="cocktail">
                <h3 id="cocktail-name">{cocktail.name}</h3>
                <div className="cocktail-img-wrapper">
                    <img className="cocktail-img" src={cocktail.img_url} />
                </div>
                <p className="cocktail-description">{cocktail.description}</p>
                <div className="cocktail-info">
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
                    <div className="ingredient">
                        <div id="spacer-right">
                            <p>Preparation:</p>
                        </div>
                        <div id="spacer-left">
                            <p className="ingredients">{cocktail.preparation?.label}</p>     
                        </div>
                    </div>
                    <div className="ingredient">
                        <div id="spacer-right">
                            <p>Glass:</p>
                        </div>
                        <div id="spacer-left">
                            <p className="ingredients">{cocktail.glass?.label}</p>
                        </div>
                    </div>
                    <div className="ingredient">
                        <div id="spacer-right">
                            <p>Ice:</p>
                        </div>
                        <div id="spacer-left">
                            <p className="ingredients">{cocktail.ice?.label}</p>
                        </div>
                    </div>
                    <p className="instructions">{cocktail.instructions}</p>
                </div>
            </div>
            {edit}
            {del}
        </div>
    )
}