import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { getGlass, getCocktailIngredients } from "../fetch/CocktailManager"
import { getIngredients } from "../fetch/IngredientsManager"
import "./Quiz.css"

export const Quiz = () => {
    const history = useHistory();
    const [cocktail, setCocktail] = useState({});
    const [cocktailIngredients, setCocktailIngredients] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [glass, setGlass] = useState([]);
    const [currentParameters, setCurrentParameters] = useState({
        preparation: "",
        spirit: "",
        glass: ""
    })

    useEffect(() => {
        getIngredients().then((data) => setIngredients(data))
        getGlass().then((data) => {setGlass(data)})
        getCocktailIngredients().then((data) => {setCocktailIngredients(data)})
    }, [])

    const changeParameterState = (domEvent) => {
        let newParameters = {...currentParameters}
        let newValue = domEvent.target.value
        newParameters[domEvent.target.name] = newValue
        setCurrentParameters(newParameters)
    }

    return (
        <div className="quiz">
            <form className="cocktail-form">
            <h3 className="cocktail-form-title" id="cocktail-name">What are you craving?</h3>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="preparation">Would you like something Boozy or Refreshing?</label>
                        <select name="preparation" required autoFocus className="form-control"
                            value={currentParameters.preparation}
                            onChange={changeParameterState}>
                            <option value="0">Select One</option>
                            <option value="1">Refreshing</option>
                            <option value="2">Boozy</option>
                        </select>
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="spirit">What's your spirit of preference?</label>
                        <select name="spirit" required autoFocus className="form-control"
                            value={currentParameters.spirit}
                            onChange={changeParameterState}>
                            <option value="0">Select Spirit</option>
                            {ingredients.map(ingredient => {
                                if (ingredient.type.id == 1)
                                    return(
                                        <option key={ingredient.id} value={ingredient.id}>
                                            {ingredient.name}
                                        </option>
                                    )
                            })}
                        </select>
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="glass">How would you like it served?</label>
                        <select name="glass" required autoFocus className="form-control"
                            value={currentParameters.glass}
                            onChange={changeParameterState}>
                            <option value="0">Select One</option>
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

                <button type="submit"
                    onClick={evt => {
                        evt.preventDefault()

                        let filteredIngredients = cocktailIngredients.filter((ingredient) => ingredient.cocktail.preparation == currentParameters.preparation
                            && ingredient.cocktail.glass == currentParameters.glass && ingredient.ingredient.id == currentParameters.spirit)

                        let arr = []
                        filteredIngredients.map(ingredient => {
                            arr.push(ingredient.cocktail)
                        })

                        const result = arr[Math.floor(Math.random()*arr.length)]

                        if (arr.length > 0) {
                            history.push(`/cocktails/${result.id}`)
                        } else {
                            alert("Sorry, we don't have a match for you!")
                        }
                    }}
                    className="btn">Submit
                </button>

            </form>
        </div>
    )
}