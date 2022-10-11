import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { getCocktailById, getCocktailIngredients, deleteCocktail, getIngredientsByCocktail, getCocktails } from "../fetch/CocktailManager"
import { getIngredientTypes } from "../fetch/IngredientsManager";
import "./Cocktail.css"

export const CocktailDetails = () => {
    const history = useHistory();
    const params = useParams();
    const [cocktailId, setCocktailId] = useState(parseInt(params.cocktailId));
    const [cocktail, setCocktail] = useState({});
    const [cocktailIngredients, setCocktailIngredients] = useState([]);
    const [filteredIngredients, setFilteredIngredients] = useState([]);
    const [cocktails, setCocktails] = useState([]);
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem("userId")));

    useEffect(() => {
        getCocktails().then((cocktails) => {
            setCocktails(cocktails);
        })
    }, []);

    useEffect(() => {

        getCocktailById(cocktailId).then((cocktail) => {
            setCocktail(cocktail);
        })

        getIngredientsByCocktail(cocktailId).then((data) => {setFilteredIngredients(data)})

    }, [cocktailId]);

    const handleDeleteCocktail = (id) => {
        deleteCocktail(id)
        .then(getCocktails().then((data) => {
            setCocktails(data)
        }))
        .then(history.push("/cocktails"));
    }

    let del;
    let edit;

    const deleteAuth = () => {
        if ((cocktail.creator?.user?.id == userId) || (cocktail.creator?.user?.id == 1)) {
            edit = <Link to={{pathname: `/cocktails/edit/${cocktailId}`}}><button className="btn">Edit</button></Link>
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
                        {filteredIngredients.map(ingredient => {
                            if (ingredient.ingredient?.type == 1)
                                return(
                                    <div className="ingredient" key={ingredient.id}>
                                        <div id="spacer-right">
                                            <p>{parseFloat(ingredient.amount)}</p>
                                            <p>{ingredient.unit?.label}</p>
                                        </div>
                                        <div id="spacer-left">
                                            <p>{ingredient.ingredient.name}</p>
                                        </div>
                                    </div>
                                )
                        })}
                    </div>
                    <div className="ingredients">
                        {filteredIngredients.map(ingredient => {
                            if (ingredient.ingredient?.type == 2)
                                return(
                                    <div className="ingredient" key={ingredient.id} >
                                        <div id="spacer-right">
                                            <p>{parseFloat(ingredient.amount)}</p>
                                            <p>{ingredient.unit?.label}</p>
                                        </div>
                                        <div id="spacer-left">
                                        <p>{ingredient.ingredient.name}</p>
                                        </div>
                                    </div>
                                )
                        })}
                    </div>
                    <div className="ingredients">
                        {filteredIngredients.map(ingredient => {
                            if (ingredient.ingredient?.type == 7)
                                return(
                                    <div className="ingredient" key={ingredient.id}>
                                        <div id="spacer-right">
                                            <p>{parseFloat(ingredient.amount)}</p>
                                            <p>{ingredient.unit?.label}</p>
                                        </div>
                                        <div id="spacer-left">
                                            <p>{ingredient.ingredient.name}</p>
                                        </div>
                                    </div>
                                )
                        })}
                    </div>
                    <div className="ingredients">
                        {filteredIngredients.map(ingredient => {
                            if (ingredient.ingredient?.type == 6)
                                return(
                                    <div className="ingredient" key={ingredient.id}>
                                        <div id="spacer-right">
                                            <p>{parseFloat(ingredient.amount)}</p>
                                            <p>{ingredient.unit?.label}</p>
                                        </div>
                                        <div id="spacer-left">
                                            <p>{ingredient.ingredient.name}</p>
                                        </div>
                                    </div>
                                )
                        })}
                    </div>
                    <div className="ingredients">
                        {filteredIngredients.map(ingredient => {
                            if (ingredient.ingredient?.type == 5)
                                return(
                                    <div className="ingredient" key={ingredient.id}>
                                        <div id="spacer-right">
                                            <p>{parseFloat(ingredient.amount)}</p>
                                            <p>{ingredient.unit?.label}</p>
                                        </div>
                                        <div id="spacer-left">
                                            <p>{ingredient.ingredient.name}</p>
                                        </div>
                                    </div>
                                )
                        })}
                    </div>
                    <div className="ingredients">
                        {filteredIngredients.map(ingredient => {
                            if (ingredient.ingredient?.type == 3)
                                return(
                                    <div className="ingredient" key={ingredient.id}>
                                        <div id="spacer-right">
                                            <p>{parseFloat(ingredient.amount)}</p>
                                            <p>{ingredient.unit?.label}</p>
                                        </div>
                                        <div id="spacer-left">
                                            <p>{ingredient.ingredient.name}</p>
                                        </div>
                                    </div>
                                )
                        })}
                    </div>
                    <div className="ingredients">
                        {filteredIngredients.map(ingredient => {
                            if (ingredient.ingredient?.type == 4)
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