import React, {useContext, useEffect, useState} from "react";
import '../../styles/components/Main/Main.css';
import Post from "../Post/Post";
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import {useFetch} from "../../Hook/useFetch.hook";
import {AuthContext} from "../Auth/AuthContext";
import Layout from "../Layout";

function Bookmark() {
    const {request} = useFetch()
    const [post, setPost] = useState([])
    const {userId} = useContext(AuthContext)

    useEffect(() => {
        const fetchData = async () => {
            const response = await request('https://twitter-ser.herokuapp.com/posts/bookmarks', 'POST', {userId});
            setPost(response);
        };
        fetchData();
    }, [setPost]);

    return (
        <Layout  active={true}>
            <div className="main">
                <div className="main__header">
                    <h2>Главная </h2>
                    <AutoAwesomeOutlinedIcon className="main__auto"/>
                </div>
                {post.length > 0 ? post.slice(0).reverse().map(items => (
                    <Post post={items.post}/>
                )): <h1 className={'header-tweet'}>Здесь пока нет никаких закладок</h1>}
            </div>
        </Layout>
    )
}

export default Bookmark;
