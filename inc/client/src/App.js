import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react"
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn"
import Nav from "./components/Nav"
import { ProvideAuth } from "./hooks/useAuth.js";
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
                        <Route exact path="/books/:id">
                        </Route>
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
