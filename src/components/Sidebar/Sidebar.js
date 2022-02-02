import React, {useContext, useEffect, useState} from "react";
import TwitterIcon from
        "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {Button} from "@mui/material";
import '../../styles/components/Sidebar/Sidebar.css';
import {NavLink, useNavigate} from "react-router-dom";
import {useModal} from 'react-hooks-use-modal';
import {Avatar} from "@material-ui/core";
import {AuthContext} from "../Auth/AuthContext";
import {useFetch} from "../../Hook/useFetch.hook";

function Sidebar() {
    const [Modal, open, close] = useModal('root', {
        preventScroll: true,
        closeOnOverlayClick: false
    });
    const navigate = useNavigate()

    function logoutHandler(event) {
        event.preventDefault()
        account.logout()
        navigate('/')
    }

    const {request} = useFetch()
    const account = useContext(AuthContext)
    const [name, setName] = useState({})
    const getName = async () => {
        const response = await request(`https://twitter-ser.herokuapp.com/auth/${account.userId}`)
        setName(response)
    }
    useEffect(() => getName(), [setName])

    return (
        <div className="sidebar">

            <NavLink to={"/"} className="sidebar__nav">
                <TwitterIcon className="sidebar__twitterIcon"/>
                <SidebarOption Icon={HomeRoundedIcon} text="Главная"/>
            </NavLink>

            <NavLink to={"/explore"} className="sidebar__nav">
                <SidebarOption Icon={TagRoundedIcon} text="Исследовать"/>
            </NavLink>

            <NavLink to={"/notifications"} className="sidebar__nav">
                <SidebarOption Icon={NotificationsNoneRoundedIcon} text="Уведомления"/>
            </NavLink>

            <SidebarOption Icon={MailOutlineIcon} text="Сообщения"/>

            <NavLink to={"/bookmark"} className="sidebar__nav">
                <SidebarOption Icon={BookmarkBorderIcon} text="Закладки"/>
            </NavLink>

            <SidebarOption Icon={ListAltIcon} text="Списки"/>

            <NavLink to={"/profile"} className="sidebar__nav">
                <SidebarOption Icon={PermIdentityIcon} text="Профиль"/>
            </NavLink>

            <SidebarOption Icon={MoreHorizIcon} text="Ещё"/>

            <Button variant="outlined" className="sidebar__twit" fullWidth>
                Твитнуть
            </Button>
            <div className="modal">
                <button onClick={open} className="modal__button">
                    <Avatar src={name.avatar}/>
                    <div className="modal__card">
                        <h4>{name.name}</h4>
                        <p>@{name.name}</p>
                    </div>
                    <MoreHorizIcon/>
                </button>
                <Modal>
                    <div className="modal__content">
                        <div className="modal__user">
                            <h3>{name.name}</h3>
                            <p>@{name.name}</p>
                        </div>
                        <div className="modal__navigation">
                            <Button onClick={logoutHandler} className="modalBtn">Выйти</Button>
                            <Button href="/registration" className="modalBtn">Новый аккаунт</Button>
                        </div>
                        <button onClick={close} className="modal__close">CLOSE</button>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default Sidebar;