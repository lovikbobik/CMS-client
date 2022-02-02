import React, {useContext, useEffect, useState} from "react";
import {useFetch} from "../../../Hook/useFetch.hook";
import {AuthContext} from "../../Auth/AuthContext";
import Post from "../../Post/Post";

function ProfileTweets() {
    const {request} = useFetch()
    const {userId} = useContext(AuthContext)
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const posts = async () => {
            const res = await request(`https://twitter-ser.herokuapp.com/auth/${userId}`)
            setPosts(res.posts)
        }
        posts()
    })
    return (
        <div>
            {posts.length > 0 ? posts.slice(0).reverse().map((item) => {
                return (<Post post={item}/>)
            }): <h2 className={"header-tweet"}>Тут будут твои посты</h2>}
        </div>
    )
}

export default ProfileTweets;