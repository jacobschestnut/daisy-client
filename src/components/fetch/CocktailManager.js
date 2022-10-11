export const getCocktails = () => {
    return fetch("https://make-my-daisy-server.herokuapp.com/cocktails", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`
        }
    })
        .then(response => response.json())
}

export const getIngredientsByCocktail = (cocktailId) => {
    return fetch(`https://make-my-daisy-server.herokuapp.com/cocktail_ingredients?cocktail=${cocktailId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`
        }
    })
    .then(res => res.json())
}

export const getCocktailById = (cocktailId) => {
    return fetch(`https://make-my-daisy-server.herokuapp.com/cocktails/${cocktailId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`
        }
    })
    .then(res => res.json())
}

export const getCocktailIngredients = () => {
    return fetch("https://make-my-daisy-server.herokuapp.com/cocktail_ingredients", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`
        }
    })
        .then(response => response.json())
}

export const createCocktail = (cocktail) => {
    return fetch("https://make-my-daisy-server.herokuapp.com/cocktails", {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cocktail)
    })
}

export const createCocktailIngredient = (cocktailIngredient) => {
    return fetch("https://make-my-daisy-server.herokuapp.com/cocktails", {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cocktailIngredient)
    })
}

export const deleteCocktail = (cocktailId) => {
    return fetch(`https://make-my-daisy-server.herokuapp.com/cocktails/${cocktailId}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`
        }
    })
    .then(res => res.json())
    .then(getCocktails)
}

export const editCocktail = (cocktail) => {
    return fetch(`https://make-my-daisy-server.herokuapp.com/cocktails/${cocktail.id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cocktail)
    })
        .then(getCocktails)
}

// -----------------------------------------------------------------------------

export const getPreparations = () => {
    return fetch("https://make-my-daisy-server.herokuapp.com/preparations", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`
        }
    })
        .then(response => response.json())
}

export const getIce = () => {
    return fetch("https://make-my-daisy-server.herokuapp.com/ice", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`
        }
    })
        .then(response => response.json())
}

export const getGlass = () => {
    return fetch("https://make-my-daisy-server.herokuapp.com/glass", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`
        }
    })
        .then(response => response.json())
}