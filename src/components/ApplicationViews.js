import React from "react"
import { Route } from "react-router-dom"
import { CocktailList } from "./cocktail/CocktailList"
import { CocktailDetails } from "./cocktail/CocktailDetails"
import { CocktailForm } from "./cocktail/CocktailForm"
import { Home } from "./home/Home"
import { Quiz } from "./quiz/Quiz"
import { UpdateCocktail } from "./cocktail/UpdateCocktail"

export const ApplicationViews = () => {
    return <>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/quiz"><Quiz /></Route>
        <Route exact path="/cocktails"><CocktailList /></Route>
        <Route exact path="/cocktails/:cocktailId"><CocktailDetails /></Route>
        <Route exact path="/cocktails/edit/:cocktailId"><UpdateCocktail /></Route>
        <Route path="/newcocktail"><CocktailForm /></Route>
    </>
}
