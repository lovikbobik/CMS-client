import React from 'react'
import "../styles/Pages/StartPage.css"
import TwitterIcon from
        "@material-ui/icons/Twitter";
import {Button} from "@mui/material";

function StartPage() {
    return (
        <div>
            <div className="start">
                <div className="start__img">
                    <img src="https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png" alt={"картинка"}/>
                </div>
                <div>
                    <div className="start__info">
                        <TwitterIcon className="start__icon"/>
                        <div className="start__header">
                            <h1>В курсе происходящего </h1>
                            <h3>Присоединяйтесь к Твиттеру прямо сейчас!</h3>
                        </div>
                        <div>
                            <Button href="/registration" className="signUpBtn">Регистрация</Button>
                        </div>
                        <div>
                            <Button href="/login" className="signInBtn">Вход </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <ul className="footer">
                    <li>О нас</li>
                    <li>Справочный центр</li>
                    <li>Условия предоставления услуг</li>
                    <li>Политика конфиденциальности</li>
                    <li>Политика в отношении файлов cookie</li>
                    <li>Информация о рекламе</li>
                    <li>Блог</li>
                    <li>Статус</li>
                    <li>Работа</li>
                    <li>Ресурсы бренда</li>
                    <li>Реклама</li>
                    <li>Маркетинг</li>
                    <li>Твиттер для бизнеса</li>
                    <li>Разработчикам</li>
                    <li>Каталог</li>
                    <li>Настройки</li>
                    <li>©Twitter, Inc., 2021.</li>
                </ul>
            </div>
        </div>
    )

}

export default StartPage;
