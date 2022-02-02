import React from "react";
import Registration from "../components/Auth/Registration";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../styles/Pages/LoginPage.css"

function RegistrationPage() {
    return (
        <div className="loginPage">
            <div className="loginPage__header">
                <TwitterIcon className="login__icon"/>
                <h1>Создайте учетную запись</h1>
            </div>
            <Registration/>
        </div>
    )
}

export default RegistrationPage;
