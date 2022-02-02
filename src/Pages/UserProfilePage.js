import React from "react";
import User from "../components/Profile/User";
import Layout from "../components/Layout";

function UserProfilePage() {
    return (
        <div className="app">
            <Layout active={true}>
                <User/>
            </Layout>
        </div>
    );
}

export default UserProfilePage;