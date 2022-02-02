import React from "react";
import '../../styles/components/Profile/Profile.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {Avatar, Button} from "@material-ui/core";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import {useParams} from "react-router-dom";

function User() {
    const {username} = useParams();
    return (
        <div className="profile">

            <div className="profile__header">
                <ArrowBackIcon className="profile__icon"/>
                <div className="profile__headerText">
                    <h2>{username}</h2>
                    <p>5 Твитов</p>
                </div>
            </div>

            <div>
                <img className="profile__background"
                     src="https://sun9-37.userapi.com/c637122/v637122263/2589f/Cat6cVGDrvU.jpg"/>
            </div>

            <div className="profile__follow">
                <div>
                    <Avatar className="profile__avatar"
                            src="https://million-wallpapers.ru/wallpapers/5/28/388176828069915/malenkaya-kukla.jpg"/>
                </div>
                <MoreHorizIcon className="profile__more"/>
                <Button variant="outlined" className="user__button">Подписаться</Button>
            </div>

            <div className="profile__info">

                <div className="profile__user">
                    <h2>{username} <VerifiedIcon className="profile__verified" fontSize="small"/></h2>
                    <p>@other_user </p>
                </div>

                <div>
                    <p>Я - не ты. Это страничка другого пользователя</p>
                </div>

                <div className="profile_description">
                    <span className="align"><LocationOnOutlinedIcon/>Город</span>
                    <span className="align">
                        <LinkOutlinedIcon/>
                        <a href="https://onlyfans.com/">Работа</a>
                    </span>
                    <span className="align"><DateRangeOutlinedIcon/>Дата</span>
                </div>

                <div className="profile__followers">
                    <span> <b className="profile__black">0 </b> Кумиров </span>
                    <span className="follow__dist"> <b
                        className="profile__black">0 </b>Подписчиков</span>
                </div>
            </div>

        </div>
    )
}

export default User;