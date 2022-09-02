import React from "react"
import { Route } from "react-router-dom"
import { CocktailList } from "./cocktail/CocktailList"

export const ApplicationViews = () => {
    return <>
        <Route exact path="/cocktails"><CocktailList /></Route>
        <Route exact path="/cocktails/:cocktailId"><CocktailDetail /></Route>
    </>
}
