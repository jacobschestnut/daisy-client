// import React, { useState, useEffect } from "react"
// import { useHistory } from 'react-router-dom'
// import { getGlass, getPreparations, getCocktails } from "../fetch/CocktailManager"
// import { getIngredients, getIngredientTypes } from "../fetch/IngredientsManager"
// import "./Quiz.css"

// export const Quiz = () => {
//     const history = useHistory();
//     const [cocktails, setCocktails] = useState([]);
//     const [cocktailIngredients]
//     const [ingredients, setIngredients] = useState([]);
//     const [ingredientTypes, setIngredientTypes] = useState([]);
//     const [preparations, setPreparations] = useState([]);
//     const [glass, setGlass] = useState([]);
//     const [currentParameters, setCurrentParameters] = useState({
//         preparation: "",
//         spirit: "",
//         glass: ""
//     })

//     useEffect(() => {
//         getPreparations().then((data) => setPreparations(data))
//         getIngredients().then((data) => setIngredients(data))
//         getIngredientTypes().then((data) => {setIngredientTypes(data)})
//         getGlass().then((data) => {setGlass(data)})
//         getCocktails().then((data) => {setCocktails(data)})
//     }, [])

//     const changeParameterState = (domEvent) => {
//         let newParameters = {...currentParameters}
//         let newValue = domEvent.target.value
//         newParameters[domEvent.target.name] = newValue
//         setCurrentParameters(newParameters)
//     }

//     return (
//         <div className="quiz">
//             <form>

//                 <fieldset>
//                     <div className="form-group">
//                         <label htmlFor="preparation">Would you like something Boozy or Refreshing?</label>
//                         <select name="preparation" required autoFocus className="form-control"
//                             value={currentParameters.preparation}
//                             onChange={changeParameterState}>
//                             <option value="0">Select One</option>
//                             <option value="1">Refreshing</option>
//                             <option value="2">Boozy</option>
//                         </select>
//                     </div>
//                 </fieldset>

//                 <fieldset>
//                     <div className="form-group">
//                         <label htmlFor="spirit">What's your spirit of preference?</label>
//                         <select name="spirit" required autoFocus className="form-control"
//                             value={currentParameters.spirit}
//                             onChange={changeParameterState}>
//                             <option value="0">Select Spirit</option>
//                             {ingredients.map(ingredient => {
//                                 if (ingredient.type.id == 1)
//                                     return(
//                                         <option key={ingredient.id} value={ingredient.id}>
//                                             {ingredient.name}
//                                         </option>
//                                     )
//                             })}
//                         </select>
//                     </div>
//                 </fieldset>

//                 <fieldset>
//                     <div className="form-group">
//                         <label htmlFor="glass">How would you like it served?</label>
//                         <select name="glass" required autoFocus className="form-control"
//                             value={currentParameters.glass}
//                             onChange={changeParameterState}>
//                             <option value="0">Select One</option>
//                             {
//                                 glass.map((glass) => (
//                                     <option key={glass.id} value={glass.id}>
//                                         {glass.label}
//                                     </option>
//                                 ))
//                             }
//                         </select>
//                     </div>
//                 </fieldset>

//                 <button type="submit"
//                     onClick={evt => {
//                         evt.preventDefault()

//                         let filteredCocktails = cocktails.filter((cocktail, cocktailIngredients) => cocktail.preparation.id == currentParameters.preparation
//                             && cocktail.glass.id == currentParameters.glass
//                             && )

//                         let result = [Math.floor(Math.random()*filteredCocktails.length)]
                        
//                         console.log(filteredCocktails)
//                     }}
//                     className="btn">Submit
//                 </button>

//             </form>
//         </div>
//     )
// }