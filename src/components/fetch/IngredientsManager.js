export const getIngredients = () => {
    return fetch(`http://localhost:8000/ingredients`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("daisy_token")}`
        }
    })
    .then(res => res.json())
}