import React, {useEffect, useState} from "react";
import '../../styles/components/Main/Main.css';
import Tweet from './Tweet.js';
import Post from "../Post/Post";
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import {useFetch} from "../../Hook/useFetch.hook";

function Main() {
    const {request} = useFetch()
    const[post,setPost]=useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await request('https://twitter-ser.herokuapp.com/posts');
            setPost(response);
        };
        fetchData();
    }, [setPost]);

    return (
            <div className="main">
                <div className="main__header">
                    <h2>Главная </h2>
                    <AutoAwesomeOutlinedIcon className="main__auto"/>
                </div>
                <Tweet/>
                {post.slice(0).reverse().map(items => (
                    <Post post = {items}/>
                ))}
            </div>
    )
}

export default Main;
