// Any component that wants auth state
import React from "react";
import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth.js";

export default function Nav(props) {
    // Get auth state and re-render anytime it changes
    const auth = useAuth();

    return (
        <>
            {
                auth.user ? (
                    <>
                        <Link to="/account">Account ({auth.user.email})</Link>
                        <button onClick={() => auth.signout()}>Signout</button>
                    </>
                ) : (
                    <Link to="/login">Login</Link>
                )
            }
        </>
    );
}