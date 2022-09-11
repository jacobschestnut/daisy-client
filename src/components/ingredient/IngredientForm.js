import { useState, useEffect } from "react";
import { getIngredientTypes } from "../fetch/IngredientsManager";

export const IngredientForm = () => {

    const [ingredient_types, setIngredient_types] = useState([]);

    const [newIngredients, setNewIngredients] = useState([
        { name: '', type: 0 }
    ])

    useEffect(() => {
        getIngredientTypes().then((types) => {
            setIngredient_types(types);
        })
    }, []);

    const handleNewFormChange = (event, index) => {
        let data = [...newIngredients];
        data[index][event.target.name] = event.target.value;
        setNewIngredients(data);
    }

    const addNewIngredient = () => {
        let object = {
            name: '',
            type: 0,
        }

        setNewIngredients([...newIngredients, object])
    }

    const removeNewIngredient = (index) => {
        let data = [...newIngredients];
        data.splice(index, 1)
        setNewIngredients(data)
    }

    return (
        <div className="new-ingredient-form">
            <form>
                {newIngredients.map((form, index) => {
                    return (
                        <div key={index}>
                            <input
                                name='name'
                                placeholder='Ingredient Name'
                                onChange={event => handleNewFormChange(event, index)}
                                value={form.name}
                            />
                            <select name="type" required autoFocus className="form-control"
                                value={form.type}
                                onChange={event => handleNewFormChange(event, index)}>
                                <option value="0">Ingredient Type</option>
                                {
                                    ingredient_types.map((ingredient_type) => (
                                        <option key={ingredient_type.id} value={ingredient_type.id}>
                                            {ingredient_type.label}
                                        </option>
                                    ))
                                }
                            </select>
                            <button onClick={() => removeNewIngredient(index)}>Remove</button>
                        </div>
                    )
                })}
            </form>
            <button onClick={addNewIngredient}>Add Ingredient</button>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    
                    newIngredients.map(ingredient => {
                        ingredient.name = ingredient.name
                        ingredient.type = parseInt(ingredient.type)
                        console.log(ingredient)
                    })

                    // createCocktail(cocktail)
                    //     .then(() => history.push("/"))
                }}
                className="btn">Submit</button>
        </div>
    )
}