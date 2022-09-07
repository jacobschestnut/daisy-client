import { useState, useEffect } from "react";
import { getIngredients, getUnits } from "../fetch/IngredientsManager";

export const CocktailIngredients = () => {
    const [ingredients, setIngredients] = useState([]);
    const [units, setUnits] = useState([]);

    const [cocktailIngredients, setCocktailIngredients] = useState([
        { ingredient: 0, amount: 0, unit: 0 }
    ])

    useEffect(() => {
        getIngredients().then((ingredients) => {
            setIngredients(ingredients);
        })

        getUnits().then((units) => {
            setUnits(units);
        })
    }, []);

    const handleExistingFormChange = (event, index) => {
        let data = [...cocktailIngredients];
        data[index][event.target.name] = event.target.value;
        setCocktailIngredients(data);
    }

    const addExistingIngredient = () => {
        let object = {
            ingredient: 0,
            amount: 0,
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
        <div className="cocktail-ingredient-form">
            <form>
                {cocktailIngredients.map((form, index) => {
                    return (
                        <div key={index}>
                            <select name="ingredient" required autoFocus className="form-control"
                                value={form.ingredient}
                                onChange={event => handleExistingFormChange(event, index)}>
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
                                name='amount'
                                placeholder='Quantity'
                                onChange={event => handleExistingFormChange(event, index)}
                                value = {form.amount}
                            />
                            <select name="unit" required autoFocus className="form-control"
                                value={form.unit}
                                onChange={event => handleExistingFormChange(event, index)}>
                                <option value="0">Select unit</option>
                                {
                                    units.map((unit) => (
                                        <option key={unit.id} value={unit.id}>
                                            {unit.label}
                                        </option>
                                    ))
                                }
                            </select>
                            <button onClick={() => removeExistingIngredient(index)}>Remove</button>
                        </div>
                    )
                })}
            </form>
            <div className="form-btns">
                <button onClick={addExistingIngredient}>Add Ingredient</button>
                {/* <button onClick={addNewIngredient}>Create Ingredient</button> */}
            </div>
            
        </div>
    )
}