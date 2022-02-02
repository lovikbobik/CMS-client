import React, {useState} from "react";
import {Button} from "@material-ui/core";
import "../../styles/components/Auth/Registration.css"
import "../../styles/components/Auth/Login.css"
import {NavLink, useNavigate} from "react-router-dom";
import {useFetch} from "../../Hook/useFetch.hook";

function RegistrationPage() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    })
    const [rpassword, setRpassword] = useState({
        repeat_password:''
    })
    const navigate = useNavigate()
    const {request} = useFetch()
    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const passwordHandler = event => {
        setRpassword({...rpassword, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
             if (form.password === rpassword.repeat_password) {
                 await request('https://twitter-ser.herokuapp.com/auth/register', 'POST', {...form})
                 navigate("/login")
             }
        } catch (e) {
        }
    }
    return (
        <div className="registration">
            <div className="login__formInput">
                <input type="text"
                       name="name"
                       value={form.name}
                       placeholder={"Имя"}
                       className="registration__pass"
                       autoComplete="off"
                       onChange={changeHandler}/>
                <input
                    type="text"
                    name="email"
                    value={form.email}
                    placeholder={"Эл. почта"}
                    className="registration__pass"
                    autoComplete="off"
                    onChange={changeHandler}/>
                <input
                    placeholder={"Пароль"}
                    type="password"
                    name="password"
                    className="registration__pass"
                    autoComplete="off"
                    value={form.password}
                    onChange={changeHandler}/>
                <input
                    placeholder={"Повторите пароль"}
                    type="password"
                    name="repeat_password"
                    value={rpassword.repeat_password}
                    className="registration__pass"
                    onChange={passwordHandler}
                />
            </div>
            <NavLink to="/login" className="login__question">
                <p>Уже есть аккаунт?</p>
            </NavLink>
            <Button type="submit"
                    onClick={registerHandler}>
                Создать</Button>
        </div>
    )
}

export default RegistrationPage;