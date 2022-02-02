import React, {useContext, useEffect, useState} from "react";
import '../../styles/components/Post/Post.css';
import {Avatar} from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import {Button} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {AuthContext} from "../Auth/AuthContext";
import axios from "axios";


function Post({post}) {
    const [comments, setComments] = useState([])
    const {userId} = useContext(AuthContext)

    useEffect(() => {
        const getPost = async () => {
            try {
                const response = await axios(`https://twitter-ser.herokuapp.com/posts/${post._id}`)
                setComments(response.data.comments)
            } catch (e) {
            }
        }
        getPost();
    }, [setComments])

    const addToBookmark = async()=>{
        try{
            const postId = post._id
            await axios.post('https://twitter-ser.herokuapp.com/posts/bookmark', {userId, postId})

        }catch (e) {

        }
    }

    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src={post.avatar}/>
            </div>
            <div className="post__body">
                <div className="post_header">
                    <div className="post__headerText">
                        <h3>
                            <span className="post__headerSpecial">
                                {post.name}{"  "}
                                {post.verified && <VerifiedIcon className="post__badge" fontSize="small"/>}
                                <span className="post__color">
                                @{post.username + " "}
                                    {post.date}
                                </span>
                        </span>
                            <span>
                                <NavLink to={`/tweet/${post._id}`}>
                                    <MoreHorizOutlinedIcon className="post__more"/>
                                </NavLink>
                        </span>
                        </h3>
                    </div>
                    <div className="post__description">
                        <p>
                            {post.text}
                        </p>
                    </div>
                </div>
                <img
                    src={post.image}
                    alt=""
                />
                <div className="post__footer">
                    <Button variant="text" size="small" className="post__chat">
                        <NavLink to={`/tweet/${post._id}`} className={'sidebar__nav'}>
                            <ChatBubbleOutlineIcon fontSize="small"/>
                        </NavLink>
                        <h4>{comments.length}</h4>
                    </Button>

                    <Button variant="text" size="small" className="post__repeat">
                        <RepeatIcon fontsize="small"/>
                        <h4>{post.retweetCount}</h4>
                    </Button>
                    <Button variant="text" size="small" className="post__favourite">
                        <FavoriteBorderIcon fontsize="small" className={post.isLiked ? "post__red" : "post__default"}/>
                        <h4 className={post.isLiked ? "post__red" : "post__default"}>{post.likeCount}</h4>
                    </Button>

                    <Button onClick={addToBookmark} variant="text" size="small" className="post__chat">
                        <PublishIcon fontsize="small"/>
                        <h4>{post.shareCount}</h4>
                    </Button>
                </div>

            </div>
        </div>
    );
}

export default Post;