import { use } from "passport"
import { Component } from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export default function PrivateRoute({ children, ...rest }) {
    const auth = useAuth()
    return (
        <Route {...rest} render={({ location }) => {
            return auth.user
                ? children
                : <Redirect to={{ //Declarative routing
                    pathname: '/login',
                    state: { from: location }
                }}
                />
        }} />
    )
}