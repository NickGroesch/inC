import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { useState } from "react"
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn"
import Application from "./pages/Application"
import Nav from "./components/Nav"
import PrivateRoute from "./components/PrivateRoute"
import { ProvideAuth, useAuth } from "./hooks/useAuth.js";
import "./App.css"


function App() {

    return (
        <ProvideAuth>
            <Router>
                <div>
                    <Nav></Nav>
                    <Switch>
                        <Route exact path={["/", "/signup"]}>
                            <SignUp />
                        </Route>
                        <Route exact path={"/login"}>
                            <LogIn />
                        </Route>
                        <PrivateRoute exact path="/main">
                            <Application></Application>
                        </PrivateRoute>
                        <Route>
                            {/* catchall */}
                        </Route>
                    </Switch>
                </div>
            </Router>
        </ProvideAuth>
    );
}

export default App;
