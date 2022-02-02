import React from "react";
import "../../styles/components/Widgets/ActualDetails.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function ActualDetails({tag, trend, views}){
    return (
        <div className="actualDetails">
            <div className="actualDetails__recommends">
            <p className="actualDetails__txt">{trend}</p>
            <h3 className="actualDetails__tag">#{tag}</h3>
            <p className="actualDetails__txt">{views} Твитов</p>
            </div>
            <MoreHorizIcon className="actualDetails__more"/>
        </div>
    );
}

export default ActualDetails;