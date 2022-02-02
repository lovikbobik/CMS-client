import React from 'react';
import {Avatar} from "@material-ui/core";
import {Button} from "@mui/material";
import { VerifiedRounded} from "@mui/icons-material";
import "../../styles/components/Widgets/FollowWidgetDetails.css";

export default function FollowWidgetDetails({item}) {
    return (
        <div className={"followDetails"}>
            <Avatar src={item.avatar}/>

            <div className={"followDetails__info"}>
                <div className={"followDetails__username"}>
                    <h4 className={"followDetails__textWeight"}>{item.name}</h4>
                    {item.verified && <VerifiedRounded className={"follow__badge"}/>}
                </div>
                <p className={"textGray"}>{'@' + item.username}</p>
            </div>

            <Button className={"followDetails__button"}>Подписаться</Button>
        </div>
    )
}