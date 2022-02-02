import React from "react";
import "../../styles/components/Widgets/Actual.css"
import ActualDetails from "./ActualDetails"
import SettingsIcon from '@mui/icons-material/Settings';
import Search from "./Search";
import actualElements from "../../Arrays/actualElements";

function Actual() {
    return(
        <div className="actual">
            <Search/>

            <div className="actual__recommend">
                <div className="actual__header">
                    <h2> Вам может понравится </h2>
                    <SettingsIcon className="actual__settings"/>
                </div>
                {actualElements.map((item, index) => {
                    return(
                        <ActualDetails trend={item.trend}
                                       tag={item.tag}
                                       views={item.views}
                                       key={index}
                        />
                    )
                })}

                <p> Показать еще</p>

            </div>

        </div>
    )
}

export default Actual;