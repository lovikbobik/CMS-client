import React from "react";
import '../../styles/components/Post/Post.css';
import {Avatar} from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import {Button} from "@material-ui/core";

function PostDefault({
                  name="name",
                  date="Сегодня",
                  username="username",
                  verified = false,
                  text = "text",
                  image,
                  avatar = "http://mobimg.b-cdn.net/v3/fetch/9c/9c3ebecbba3c498f843d6111fc5d452a.jpeg",
                  likeCount=0,
                  commentCount=0,
                  shareCount=0,
                  retweetCount=0,
                  isLiked = false
              }) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="post__body">
                <div className="post_header">
                    <div className="post__headerText">
                        <h3>
                            <span className="post__headerSpecial">
                                {name}{"  "}
                                {verified && <VerifiedIcon className="post__badge" fontSize="small"/>}
                                <span className="post__color">
                                @{username + " "}
                                    {date}
                                </span>
                        </span>
                            <span>
                        <MoreHorizOutlinedIcon className="post__more"/>
                        </span>
                        </h3>
                    </div>
                    <div className="post__description">
                        <p>
                            {text}
                        </p>
                    </div>
                </div>
                <img
                    src={image}
                    alt=""
                />
                <div className="post__footer">
                    <Button variant="text" size="small" className="post__chat">
                        <ChatBubbleOutlineIcon fontSize="small" />
                        <h4>{commentCount}</h4>
                    </Button>

                    <Button variant="text" size="small" className="post__repeat">
                        <RepeatIcon fontsize="small" />
                        <h4>{retweetCount}</h4>
                    </Button>
                    <Button variant="text" size="small" className="post__favourite">
                        <FavoriteBorderIcon fontsize="small" className={isLiked ? "post__red" : "post__default"}/>
                        <h4 className={isLiked ? "post__red" : "post__default"}>{likeCount}</h4>
                    </Button>

                    <Button variant="text" size="small" className="post__chat">
                        <PublishIcon fontsize="small" />
                        <h4>{shareCount}</h4>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default PostDefault;