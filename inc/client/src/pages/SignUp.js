import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"

import { ProvideAuth, useAuth } from "../hooks/useAuth"
import UserAPI from "../utils/UserAPI"
import ROUTES from "../ROUTES"


export default function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const provideAuth = useAuth()
    const history = useHistory()
    //ICEBOX:useEffect to check for cookie to suggest already has account
    const handleSubmit = async event => {
        event.preventDefault();
        console.log("username is " + email);
        console.log("password is " + password);
        try {
            const sponse = await provideAuth.signUp({
                email: email,
                password: password
            })
            console.log(sponse)
            history.push(ROUTES.LOGIN) //Imperative routing
        } catch (err) { //this is only network error, not server error
            console.error(err)
        }
    };
    return (
        <div>
            <h1>sign up!</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        id="email-input"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        id="password-input"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button className="btn btn-success" type="submit">
                    Submit
          </button>
            </form>
        </div>
    )
}
