import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createIngredient, getIngredientTypes } from "../fetch/IngredientsManager";
import "./Popup.css"

export const IngredientForm = () => {

    const history = useHistory();

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

    const handleSubmit = () => {
        newIngredients.map(ingredient => {
            ingredient.name = ingredient.name
            ingredient.type = parseInt(ingredient.type)
            createIngredient(ingredient)
        })
        alert("Ingredient(s) Added!")
    }

    return (
        <div className="new-ingredient-form">
            <form>
                {newIngredients.map((form, index) => {
                    return (
                        <div key={index} className="ingredient-fields">
                            <input
                                className="form-control"
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
                            <button className="btn" id="x-btn" onClick={() => removeNewIngredient(index)}>remove</button>
                        </div>
                    )
                })}
            </form>
            <div className="btns">
                <button id="ingredient-btn" className="btn" onClick={addNewIngredient}>Add Ingredient</button>
                <button type="submit" id="popup-submit-btn"
                    onClick={evt => {
                        evt.preventDefault();
                        
                        handleSubmit(); 
                    }}
                    
                    className="btn">Submit
                </button>
            </div>
        </div>
    )
}