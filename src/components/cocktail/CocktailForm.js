import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { getIngredients, getUnits } from "../fetch/IngredientsManager"
import { getPreparations, getIce, getGlass, createCocktail } from "../fetch/CocktailManager"
import { IngredientPopup } from "../ingredient/IngredientPopup"
import { IngredientForm } from "../ingredient/IngredientForm"
import "./Cocktail.css"

export const CocktailForm = () => {
    const history = useHistory()
    const [buttonPopup, setButtonPopup] = useState(false);
    const [preparations, setPreparations] = useState([]);
    const [ice, setIce] = useState([]);
    const [glass, setGlass] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [units, setUnits] = useState([]);

    const [cocktailIngredients, setCocktailIngredients] = useState([
        { ingredient: 0, amount: "", unit: 0 }
    ])

    const [currentCocktail, setCurrentCocktail] = useState({
        name: "",
        description: "",
        instructions: "",
        preparation: 0,
        glass: 0,
        ice: 0,
        img_url: ""
    })

    // <Route render={() => {
    //     if (localStorage.getItem("daisy_token")) {
    //         return <>
    //             <Route>
    //                 <NavBar />
    //                 <ApplicationViews />
    //             </Route>
    //         </>
    //     } else {
    //         return <Redirect to="/login" />
    //     }
    // }} />

    useEffect(() => {
        getPreparations().then((data) => setPreparations(data))
        getIngredients().then((data) => setIngredients(data))
        getIce().then((data) => setIce(data))
        getGlass().then((data) => setGlass(data))
        getUnits().then((data) => setUnits(data))
    }, [])

    useEffect(() => {
        getIngredients().then((data) => setIngredients(data))
    }, [buttonPopup])

    const handleIngredientFormChange = (event, index) => {
        let data = [...cocktailIngredients];
        data[index][event.target.name] = event.target.value;
        setCocktailIngredients(data);
    }

    const changeCocktailState = (domEvent) => {
        let newCocktail = {...currentCocktail}
        let newValue = domEvent.target.value
        newCocktail[domEvent.target.name] = newValue
        setCurrentCocktail(newCocktail)
    }

    const addExistingIngredient = () => {
        let object = {
            ingredient: 0,
            amount: "",
            unit: 0
        }

        setCocktailIngredients([...cocktailIngredients, object])
    }

    const removeExistingIngredient = (index) => {
        let data = [...cocktailIngredients];
        data.splice(index, 1)
        setCocktailIngredients(data)
    }

    return (
        <div className="form">
        <form className="cocktail-form">
            <h3 className="cocktail-form-title" id="cocktail-name">New Cocktail</h3>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" required autoFocus className="form-control"
                            value={currentCocktail.name}
                            onChange={changeCocktailState}
                        />
                    </div>
                </fieldset>

                <label htmlFor="ingredient">Ingredients:</label>
                {cocktailIngredients.map((form, index) => {
                    return (
                        <div key={index} className="form-group" id="ingredient-fields">
                            <select name="ingredient" required autoFocus className="form-control"
                                value={form.ingredient}
                                onChange={event => handleIngredientFormChange(event, index)}>
                                <option value="0">Select Ingredient</option>
                                {
                                    ingredients.map((ingredient) => (
                                        <option key={ingredient.id} value={ingredient.id}>
                                            {ingredient.name}
                                        </option>
                                    ))
                                }
                            </select>
                            <input
                                className="form-control"
                                name='amount'
                                placeholder='Amount'
                                onChange={event => handleIngredientFormChange(event, index)}
                                value = {form.amount}
                            />
                            <select name="unit" required autoFocus className="form-control"
                                value={form.unit}
                                onChange={event => handleIngredientFormChange(event, index)}>
                                <option value="0">Select Unit</option>
                                {
                                    units.map((unit) => (
                                        <option key={unit.id} value={unit.id}>
                                            {unit.label}
                                        </option>
                                    ))
                                }
                            </select>
                            <button onClick={() => removeExistingIngredient(index)} className="btn" id="x-btn">remove</button>
                        </div>
                    )
                })}
                <div className="form-btns">
                    <button onClick={addExistingIngredient} className="btn">Add Ingredient</button>
                    {/* <button onClick={addNewIngredient}>Create Ingredient</button> */}
                    <p>don't see an ingredient you need?</p>
                    <button onClick={() => setButtonPopup(true)} className="btn">Create New Ingredient</button>
                </div>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <input type="text" name="description" required autoFocus className="form-control"
                            value={currentCocktail.description}
                            onChange={changeCocktailState}
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="preparation">Preparation:</label>
                        <select name="preparation" required autoFocus className="form-control"
                            value={currentCocktail.preparation}
                            onChange={changeCocktailState}>
                            <option value="0">Select Preparation</option>
                            {
                                preparations.map((preparation) => (
                                    <option key={preparation.id} value={preparation.id}>
                                        {preparation.label}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="ice">Ice:</label>
                        <select name="ice" required autoFocus className="form-control"
                            value={currentCocktail.ice}
                            onChange={changeCocktailState}>
                            <option value="0">Select Ice</option>
                            {
                                ice.map((ice) => (
                                    <option key={ice.id} value={ice.id}>
                                        {ice.label}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="glass">Glass:</label>
                        <select name="glass" required autoFocus className="form-control"
                            value={currentCocktail.glass}
                            onChange={changeCocktailState}>
                            <option value="0">Select Glass</option>
                            {
                                glass.map((glass) => (
                                    <option key={glass.id} value={glass.id}>
                                        {glass.label}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="instructions">Instructions:</label>
                        <input type="text" name="instructions" required autoFocus className="form-control"
                            value={currentCocktail.instructions}
                            onChange={changeCocktailState}
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="img_url">Image URL:</label>
                        <input type="text" name="img_url" required autoFocus className="form-control"
                            value={currentCocktail.img_url}
                            onChange={changeCocktailState}
                        />
                    </div>
                </fieldset>
{/* ------------------------------------------------------------------------------------------------- */}
            <button type="submit"
                onClick={evt => {

                    evt.preventDefault()
// ---------------------------------------------------------------------------------
                    const cocktail = {
                        name: currentCocktail.name,
                        description: currentCocktail.description,
                        instructions: currentCocktail.instructions,
                        preparation: parseInt(currentCocktail.preparation),
                        glass: parseInt(currentCocktail.glass),
                        ice: parseInt(currentCocktail.ice),
                        img_url: currentCocktail.img_url,
                        ingredients: cocktailIngredients
                    }

                    createCocktail(cocktail)
                    .then(() => history.push("/cocktails"))
// ---------------------------------------------------------------------------------
                    cocktailIngredients.map((ingredient) => {
                        ingredient.ingredient = parseInt(ingredient.ingredient)
                        ingredient.amount = parseFloat(ingredient.amount)
                        ingredient.unit = parseInt(ingredient.unit)
                    })     

                }}
                className="btn">Submit</button>
        </form>
        <IngredientPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <IngredientForm />
        </IngredientPopup>
        </div>
    )
}