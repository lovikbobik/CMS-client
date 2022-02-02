import React from 'react';
import {BrowserRouter as Router,} from "react-router-dom";
import useRoutes from "./routes";
import {AuthContext} from "./components/Auth/AuthContext";
import {useAuth} from "./Hook/auth.hook";

function App() {
    const {token, login, logout, userId} = useAuth()
    const isAuth = !!token
    const routes = useRoutes(isAuth)
    return (

        <AuthContext.Provider value={{token, login, logout, userId, isAuth}}>
            <Router>
                {routes}
            </Router>
        </AuthContext.Provider>
    );
}


export default App;