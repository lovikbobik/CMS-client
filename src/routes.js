import React from "react";
import {
    Route, Routes,
} from "react-router-dom";
import "./App.css"
import HomePage from "./Pages/HomePage";
import StartPage from "./Pages/StartPage";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage"
import RegistrationPage from "./Pages/RegistrationPage";
import UserPage from "./Pages/UserProfilePage";
import NotificationsPage from "./Pages/NotificationsPage";
import NotificationsMentions from "./components/Notifications/NotificationsMentions";
import ExplorePage from "./Pages/ExplorePage";
import ProfileReplies from "./components/Profile/SubItems/ProfileReplies";
import ProfileMedia from "./components/Profile/SubItems/ProfileMedia";
import ProfileLikes from "./components/Profile/SubItems/ProfileLikes";
import TweetItem from "./components/Main/TweetItem";
import Bookmark from "./components/Bookmark/Bookmark";

function useRoutes(isAuth) {
    if (isAuth) {
        return (
                <Routes>
                    <Route path="/tweet/:id" exact element={<TweetItem/>}/>
                    <Route path="/" exact element={<HomePage/>}/>
                    <Route path="/profile" exact element={<ProfilePage/>}/>
                    <Route path="/user/:username" exact element={<UserPage/>}/>
                    <Route path="/notifications" exact element={<NotificationsPage/>}/>
                    <Route path="/notifications/mentions" exact element={<NotificationsMentions/>}/>
                    <Route path="/explore" exact element={<ExplorePage/>}/>
                    <Route path="/profile/replies" exact element={<ProfilePage children={<ProfileReplies/>}/>}/>
                    <Route path="/profile/media" exact element={<ProfilePage children={<ProfileMedia/>}/>}/>
                    <Route path="/profile/likes" exact element={<ProfilePage children={<ProfileLikes/>}/>}/>
                    <Route path="/bookmark" exact element={<Bookmark/>}/>
                </Routes>
        )
    }
    return (
        <Routes>
            <Route path="/" exact element={<StartPage/>}/>
            <Route path="/login" exact element={<LoginPage/>}/>
            <Route path="/registration" exact element={<RegistrationPage/>}/>
        </Routes>
    )
}

export default useRoutes;
