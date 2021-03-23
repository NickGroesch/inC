import React, { useState, useEffect } from "react";
import UserAPI from "../utils/UserAPI"
import { useHistory } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import useQuery from "../hooks/useQuery"
import ROUTES from "../ROUTES"


export default function LogIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const provideAuth = useAuth()
    const history = useHistory()


    const query = useQuery()
    const itFailed = query.get("fail")
    const failedBool = (itFailed == "true")

    const handleSubmit = async event => {
        event.preventDefault();
        console.log("username is " + email);
        console.log("password is " + password);
        try {
            const sponse = await provideAuth.logIn({
                email: email,
                password: password
            })
            if (sponse.ok) console.log("login success", sponse)
            history.push(ROUTES.APPLICATION)
        } catch (err) { //this is only network error, not server error
            console.log(err)
        }
    };

    return (
        <div>
            {failedBool ? <h2>that won't do dud</h2> : <h1>Log in dude</h1>}
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
                    Log in!
          </button>
            </form>
        </div>
    )
}