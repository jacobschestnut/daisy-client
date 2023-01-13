export const getIngredients = () => {
    return fetch(`http://localhost:8000/ingredients`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`
        }
    })
    .then(res => res.json())
}

export const createIngredient = (ingredient) => {
    return fetch("http://localhost:8000/ingredients", {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(ingredient)
    })
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