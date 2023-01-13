import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

// const navDropdownTitle = (<Glyphicon glyph="star"> Dropdown </Glyphicon>);

export const Daisy = () => (

    <>
        <Route render={() => {
            return <>
                <Route>
                    <NavBar />
                    <ApplicationViews />
                </Route>
            </>
        }} />

        <Route path="/login">
            <Login />
        </Route>

        <Route path="/register">
            <Register />
        </Route>

    </>
)
