import { useState } from "react";

export const CocktailIngredients = () => {

    const [cocktailIngredient, setCocktailIngredient] = useState([
        { ingredient: 0, amount: 0, unit: 0 }
    ])

    const handleFormChange = (event, index) => {
        let data = [...ingredient];
        data[index][event.target.name] = event.target.value;
        setCocktailIngredient(data);
    }

    const addFields = () => {
        let object = {
            ingredient: 0,
            amount: 0,
            unit: 0
        }

        setCocktailIngredient([...cocktailIngredient, object])
    }

    return (
        <div className="cocktail-ingredient-form">
            <form>
                {cocktailIngredient.map((form, index) => {
                    return (
                        <div key={index}>
                            <input
                                name='ingredient'
                                placeholder='Ingredient'
                                onChange={event => handleFormChange(event, index)}
                                value = {form.ingredient}
                            />
                            <input
                                name='amount'
                                placeholder='Quantity'
                                onChange={event => handleFormChange(event, index)}
                                value = {form.amount}
                            />
                            <input
                                name='unit'
                                placeholder='Unit'
                                onChange={event => handleFormChange(event, index)}
                                value = {form.unit}
                            />
                        </div>
                    )
                })}
            </form>
            <button onClick={addFields}></button>
        </div>
    )
}