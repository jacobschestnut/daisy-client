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