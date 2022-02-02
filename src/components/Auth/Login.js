import React, {useContext, useState} from "react";
import {Button} from "@material-ui/core";
import "../../styles/components/Auth/Login.css";
import {AuthContext} from "./AuthContext";
import {useNavigate} from "react-router-dom";
import {useFetch} from "../../Hook/useFetch.hook";

function Login() {
    const userData = useContext(AuthContext)
    const {request} = useFetch()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const navigate = useNavigate()

    const loginHandler = async () => {
        try {
            const response = await request('https://twitter-ser.herokuapp.com/auth/login', 'POST',{...form})
            userData.login(response.token, response.userId)
            navigate('/')
        } catch (e) {
        }
    }
    return (
        <div className="login">
            <div className="login__formInput">
                <input placeholder={"почта"}
                    autoComplete="off"
                    className="login__pass"
                    name='email'
                    value={form.email}
                    onChange={changeHandler}/>
                <input
                    placeholder={"Пароль"}
                    type="password"
                    autoComplete="off"
                    className="login__pass"
                    name='password'
                    value={form.password}
                    onChange={changeHandler}/>
            </div>
            <div>
                <a href="#" className="login__question">Забыли пароль?</a>
            </div>
            <Button  onClick={loginHandler} type="submit" className="loginButton">Войти</Button>
        </div>
    )
}

export default Login;

