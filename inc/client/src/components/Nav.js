// Any component that wants auth state
import React from "react";
import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth.js";
import ROUTES from "../ROUTES"

export default function Nav(props) {
    // Get auth state and re-render anytime it changes
    const auth = useAuth();

    return (
        <>
            {
                auth.user ? (
                    <>
                        {/* <Link to="/account">Account ({auth.user.email})</Link> */}
                        <span>Hi {auth.user.email}</span>
                        <button onClick={() => auth.logOut()}>Signout</button>
                    </>
                ) : (
                    <Link to={ROUTES.LOGIN}>Login</Link>
                )
            }
        </>
    );
}