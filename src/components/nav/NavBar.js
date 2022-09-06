import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    // const navDropdownTitle = (<Glyphicon glyph="star"> Dropdown </Glyphicon>);
    const history = useHistory()
    return (
        <ul className="navbar">
            {
                (localStorage.getItem("daisy_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("daisy_token")
                                localStorage.removeItem("userId")
                                history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        
        </ul>
    )
}
