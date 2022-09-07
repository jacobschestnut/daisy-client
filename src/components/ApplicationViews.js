import React from "react"
import { Route } from "react-router-dom"
import { CocktailList } from "./cocktail/CocktailList"
import { CocktailDetails } from "./cocktail/CocktailDetails"
import { CocktailForm } from "./cocktail/CocktailForm"

export const ApplicationViews = () => {
    return <>
        <Route exact path="/cocktails"><CocktailList /></Route>
        <Route path="/cocktails/:cocktailId"><CocktailDetails /></Route>
        <Route path="/newcocktail"><CocktailForm /></Route>
    </>
}
