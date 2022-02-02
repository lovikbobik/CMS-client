import React from "react";
import '../../styles/components/Sidebar/SidebarOption.css';

function SidebarOption({active, text, Icon}) {
    return (
        <div className={"sidebarOption "}>
            <Icon/>
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption