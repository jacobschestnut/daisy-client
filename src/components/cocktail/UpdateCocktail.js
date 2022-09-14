import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { getPreparations, getIce, getGlass, editCocktail, getCocktailById } from "../fetch/CocktailManager"
import "./Cocktail.css"

export const UpdateCocktail = () => {
    const history = useHistory()
    const params = useParams()
    const [cocktailId, setCocktailId] = useState(parseInt(params.cocktailId));
    const [preparations, setPreparations] = useState([]);
    const [ice, setIce] = useState([]);
    const [glass, setGlass] = useState([]);
    const [currentCocktail, setCurrentCocktail] = useState({
        id:"",
        name: "",
        description: "",
        instructions: "",
        preparation: 0,
        glass: 0,
        ice: 0,
        img_url: ""
    })

    useEffect(() => {
        getPreparations().then((data) => setPreparations(data))
        getIce().then((data) => setIce(data))
        getGlass().then((data) => setGlass(data))
        getCocktailById(cocktailId).then((data) => setCurrentCocktail(data))
    }, [cocktailId])

    const changeCocktailState = (domEvent) => {
        let newCocktail = {...currentCocktail}
        let newValue = domEvent.target.value
        newCocktail[domEvent.target.name] = newValue
        setCurrentCocktail(newCocktail)
    }

    return (
        <div className="form">
        <form className="cocktail-form">
            <h3 className="cocktail-form-title" id="cocktail-name">Update Cocktail</h3>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" required autoFocus className="form-control"
                            value={currentCocktail.name}
                            onChange={changeCocktailState}
                        />
                    </div>
                </fieldset>

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

            <button type="submit"
                onClick={evt => {

                    evt.preventDefault()

                    const cocktail = {
                        id: currentCocktail.id,
                        name: currentCocktail.name,
                        description: currentCocktail.description,
                        instructions: currentCocktail.instructions,
                        preparation: parseInt(currentCocktail.preparation),
                        glass: parseInt(currentCocktail.glass),
                        ice: parseInt(currentCocktail.ice),
                        img_url: currentCocktail.img_url
                    }

                    editCocktail(cocktail).then(history.push({pathname: `/cocktails/${cocktailId}`}))

                }}
                className="btn">Submit</button>
        </form>
        </div>
    )
}