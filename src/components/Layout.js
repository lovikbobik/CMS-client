import React from "react";
import "../App.css"
import Sidebar from "./Sidebar/Sidebar";
import "../styles/components/Layout.css"
import Widgets from "../components/Widgets/Widgets"

function Layout({children, active}) {
    return (
        <>
            <div className="app">
                <Sidebar/>
                <main className="layout">{children}</main>
                <Widgets actualOn={active}/>
            </div>
        </>
    );
}

export default Layout;