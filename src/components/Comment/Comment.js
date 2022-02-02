import React from 'react';
import '../../styles/components/Comment.css'
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import PublishIcon from "@material-ui/icons/Publish";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function Comment({comment}) {
    return (
        <div className={"comment"}>
            <div className={'.comment__header'}>
                <b>{comment.author.name}</b>
            </div>

            <div className={'comment__body'}>
                <p>{comment.text}</p>
            </div>

            <div className={'comment__footer'}>
                <ChatBubbleOutlineIcon fontSize="small"/>
                <FavoriteBorderIcon fontsize="small" className={"post__default"}/>
                <RepeatIcon fontsize="small"/>
                <PublishIcon fontsize="small"/>

            </div>
        </div>
    );
}

export default Comment;