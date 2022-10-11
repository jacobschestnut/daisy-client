import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import "./Auth.css"


export const Login = () => {
    const username = useRef()
    const password = useRef()
    const invalidDialog = useRef()
    const history = useHistory()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch("https://make-my-daisy-server.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: username.current.value,
                password: password.current.value
            })
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem("daisy_token", res.token)
                    localStorage.setItem("userId", res.userId)
                    history.push("/")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <main>
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Username or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <div className="title-center">
                        <h1 id="cocktail-name">Daisy</h1>
                    </div>
                    <fieldset>
                        <label htmlFor="inputUsername">Username:</label>
                        <input ref={username} type="username" id="username" className="form-control" placeholder="Username" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword">Password:</label>
                        <input ref={password} type="password" id="password" className="form-control" placeholder="Password" required />
                    </fieldset>
                    <fieldset style={{
                        textAlign: "center"
                    }}>
                        <button className="btn" type="submit">Sign In</button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Register</Link>
            </section>
        </main>
    )
}
