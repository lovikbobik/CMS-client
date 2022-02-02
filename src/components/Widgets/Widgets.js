import React from "react";
import "../../styles/components/Widgets/Actual.css";
import Actual from "./Actual";
import FollowWidget from "./FollowWidget";

function Widgets({actualOn}) {
    return (
        <div className="actual">
            {actualOn && <Actual/>}
            <FollowWidget/>
        </div>
    );
}

export default Widgets;