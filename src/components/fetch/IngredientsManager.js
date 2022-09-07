export const getIngredients = () => {
    return fetch(`http://localhost:8000/ingredients`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`
        }
    })
    .then(res => res.json())
}

export const getIngredientTypes = () => {
    return fetch(`http://localhost:8000/ingredient_types`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`
        }
    })
    .then(res => res.json())
}

export const getUnits = () => {
    return fetch(`http://localhost:8000/units`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`
        }
    })
    .then(res => res.json())
}