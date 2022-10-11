export const getIngredients = () => {
    return fetch(`https://make-my-daisy-server.herokuapp.com/ingredients`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`
        }
    })
    .then(res => res.json())
}

export const createIngredient = (ingredient) => {
    return fetch("https://make-my-daisy-server.herokuapp.com/ingredients", {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(ingredient)
    })
}

export const getIngredientTypes = () => {
    return fetch(`https://make-my-daisy-server.herokuapp.com/ingredient_types`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`
        }
    })
    .then(res => res.json())
}

export const getUnits = () => {
    return fetch(`https://make-my-daisy-server.herokuapp.com/units`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`
        }
    })
    .then(res => res.json())
}