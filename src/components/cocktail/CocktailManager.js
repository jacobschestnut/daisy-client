export const getCocktails = () => {
    return fetch("http://localhost:8000/cocktails", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`
        }
    })
        .then(response => response.json())
}