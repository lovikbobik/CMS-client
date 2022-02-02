import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetch} from "../../Hook/useFetch.hook";
import axios from "axios";
import Post from "../Post/Post";
import Layout from "../Layout";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import Comment from "../Comment/Comment";
import {AuthContext} from "../Auth/AuthContext";
import {Button} from "@material-ui/core";

function TweetItem() {
    const {userId} = useContext(AuthContext)
    const params = useParams()
    const [curPost, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [form, setForm] = useState({
        author: userId,
        text: '',
    })
    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const addCommentHandler = async () => {
        try {
            await axios.put(`https://twitter-ser.herokuapp.com/posts/post/${params.id}/push_comment/${userId}`, {...form})
        } catch (e) {
        }
    }

    useEffect(() => {
        const getPost = async () => {
            try {
                const response = await axios(`https://twitter-ser.herokuapp.com/posts/${params.id}`)
                setPost(response.data)
                setComments(response.data.comments)
            } catch (e) {
            }
        }
        getPost();
    }, [setPost, setComments])
    return (
        <Layout>
            <div className="main__header">
                <h2>Главная </h2>
                <AutoAwesomeOutlinedIcon className="main__auto"/>
            </div>

            <Post post={curPost}/>
            <input
                type={'text'}
                name={'text'}
                value={form.text}
                onChange={changeHandler}/>
            <Button onClick={addCommentHandler}>Добавить комментарий</Button>
            <h2>Комментарии: </h2>

            {comments.slice(0).reverse().map(comment => {
                return (<Comment comment={comment}/>)
            })}


        </Layout>
    );
}

export default TweetItem;