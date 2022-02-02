import React, {useContext, useEffect, useState} from "react";
import {useFetch} from "../../../Hook/useFetch.hook";
import {AuthContext} from "../../Auth/AuthContext";
import Post from "../../Post/Post";


function ProfileReplies() {
    return (
        <div>
            <h1 className={"header-tweet"}>Здесь пусто</h1>
            <h2 className={"header-tweet"}>Тут будут посты с картинками</h2>
        </div>
    )
}

export default ProfileReplies;