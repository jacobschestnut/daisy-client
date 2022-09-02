import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Daisy } from "./components/Daisy.js"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Daisy />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)
