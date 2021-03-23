// Hook (use-auth.js)//  ADAPTED FROM https://usehooks.com/useAuth/
import React, { useState, useEffect, useContext, createContext } from "react";
import UserAPI from "../utils/UserAPI";

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
    return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
    const [user, setUser] = useState(null);

    const logIn = ({ email, password }) => {
        return UserAPI.logIn({
            email: email,
            password: password
        })
            .then(response => {
                setUser(response);
                return response;
            });
    };

    const signUp = ({ email, password }) => {
        return UserAPI
            .signUp({
                email: email,
                password: password
            })
            .then(response => {
                // setUser(response.user);
                return response;
            });
    };

    const logOut = () => {
        return UserAPI
            .logOut()
            .then(() => {
                setUser(false);
            });
    };

    //ICEBOX
    // const sendPasswordResetEmail = email => {
    //     return firebase
    //         .auth()
    //         .sendPasswordResetEmail(email)
    //         .then(() => {
    //             return true;
    //         });
    // };

    // const confirmPasswordReset = (code, password) => {
    //     return firebase
    //         .auth()
    //         .confirmPasswordReset(code, password)
    //         .then(() => {
    //             return true;
    //         });
    // };
    //UNSUBSCRIPTION
    // // Subscribe to user on mount
    // // Because this sets state in the callback it will cause any ...
    // // ... component that utilizes this hook to re-render with the ...
    // // ... latest auth object.
    // useEffect(() => {
    //     const unsubscribe = firebase.auth().onAuthStateChanged(user => {
    //         if (user) {
    //             setUser(user);
    //         } else {
    //             setUser(false);
    //         }
    //     });

    //     // Cleanup subscription on unmount
    //     return () => unsubscribe();
    // }, []);

    // Return the user object and auth methods
    return {
        user,
        logIn,
        signUp,
        logOut,
        // sendPasswordResetEmail,
        // confirmPasswordReset
    };
}