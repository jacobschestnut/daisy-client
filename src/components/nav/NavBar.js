import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"
import HomeIcon from '@mui/icons-material/Home';

export const NavBar = () => {
    // const navDropdownTitle = (<Glyphicon glyph="star"> Dropdown </Glyphicon>);
    const history = useHistory()
    return (
        <div className="navbar">
            {
                (localStorage.getItem("daisy_token") !== null) ?
                    <div className="nav-icons">
                        <div className="nav-item">
                            <Link to="/" className="btn" id="btn-no-bg">
                                Home
                            </Link>
                            <Link to="/quiz" className="btn" id="btn-no-bg">
                                Quiz
                            </Link>
                            <Link to="/cocktails" className="btn" id="btn-no-bg">
                                Cocktails
                            </Link>
                        </div>
                        <div className="nav-item">
                            <button className="btn"
                                id="btn-no-bg"
                                onClick={() => {
                                    localStorage.removeItem("daisy_token")
                                    localStorage.removeItem("userId")
                                    history.push({ pathname: "/" })
                                }}
                            >Logout</button>
                        </div> 
                    </div>:
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        
        </div>
    )
}
