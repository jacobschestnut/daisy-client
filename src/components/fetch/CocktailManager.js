export const getCocktails = () => {
    return fetch("http://localhost:8000/cocktails", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`
        }
    })
        .then(response => response.json())
}

export const getCocktailById = (cocktailId) => {
    return fetch(`http://localhost:8000/cocktails/${cocktailId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`
        }
    })
    .then(res => res.json())
}

export const getCocktailIngredients = () => {
    return fetch("http://localhost:8000/cocktail_ingredients", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`
        }
    })
        .then(response => response.json())
}

export const createCocktail = (cocktail) => {
    return fetch("http://localhost:8000/cocktails", {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cocktail)
    })
}

export const createCocktailIngredient = (cocktailIngredient) => {
    return fetch("http://localhost:8000/cocktails", {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cocktailIngredient)
    })
}

export const deleteCocktail = (cocktailId) => {
    return fetch(`http://localhost:8000/cocktails/${cocktailId}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`
        }
    })
    .then(res => res.json())
}

export const editCocktail = (cocktailId) => {
    return fetch(`http://localhost:8000/cocktails/${cocktailId}`, {
        method: "PUT",
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`
        }
    })
    .then(res => res.json())
}

// -----------------------------------------------------------------------------

export const getPreparations = () => {
    return fetch("http://localhost:8000/preparations", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`
        }
    })
        .then(response => response.json())
}

export const getIce = () => {
    return fetch("http://localhost:8000/ice", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`
        }
    })
        .then(response => response.json())
}

export const getGlass = () => {
    return fetch("http://localhost:8000/glass", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`
        }
    })
        .then(response => response.json())
}