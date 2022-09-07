import React from "react"
import { Route } from "react-router-dom"
import { CocktailList } from "./cocktail/CocktailList"
import { CocktailDetails } from "./cocktail/CocktailDetails"
import { CocktailForm } from "./cocktail/CocktailForm"
import { IngredientForm } from "./cocktail/IngredientForm"
import { CocktailIngredients } from "./cocktail/CocktailIngredientForm"

export const ApplicationViews = () => {
    return <>
        <Route exact path="/cocktails"><CocktailList /></Route>
        <Route path="/cocktails/:cocktailId"><CocktailDetails /></Route>
        <Route path="/newcocktail"><CocktailForm /></Route>
        <Route path="/test1"><IngredientForm /></Route>
        <Route path="/test2"><CocktailIngredients /></Route>
    </>
}
