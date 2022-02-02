import React from "react";
import Layout from "../components/Layout";
import Profile from "../components/Profile/Profile";
import ProfileTweets from "../components/Profile/SubItems/ProfileTweets";

function ProfilePage({children = <ProfileTweets/>}) {
    return (
        <div>
            <Layout active={true}>
                <Profile children={children}/>
            </Layout>
        </div>
    );
}

export default ProfilePage;