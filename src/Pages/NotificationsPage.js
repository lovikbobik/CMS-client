import React from 'react';
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import {NavLink} from "react-router-dom";
import ".././styles/components/Notifications/Notifications.css"
import ".././styles/components/Main/Main.css"
import Layout from "../components/Layout";
import NotificationsAll from "../components/Notifications/NotificationsAll";

function NotificationsPage({children = <NotificationsAll/>}) {
    return (
        <Layout active={true}>
            <div className={"notification"}>
                <div className={"notification__header"}>
                    <h2>Уведомления</h2>
                    <SettingsOutlinedIcon className={"main__auto"}/>
                </div>
                <div className={"notification__headerButtons"}>
                    <div className={"notificationBtn"}>
                        <NavLink  to={"/notifications"} className="notification__navLink">Все</NavLink>
                    </div>
                    <div className={"notificationBtn"}>
                        <NavLink to={"/notifications/mentions"} className="notification__navLink" >Упоминания</NavLink>
                    </div>
                </div>
                <div className={"notification__content"}>
                    {children}
                </div>
            </div>
        </Layout>
    )
}

export default NotificationsPage;