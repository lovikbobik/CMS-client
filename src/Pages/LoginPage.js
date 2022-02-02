import React from "react";
import Login from "../components/Auth/Login";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../styles/Pages/LoginPage.css"

function LoginPage() {
    return (
        <div className="loginPage">
            <div className="loginPage__header">
                <TwitterIcon className="login__icon"/>
                <h1>Вход в Твиттер</h1>
            </div>
            <Login/>
        </div>
    )
}

export default LoginPage;
