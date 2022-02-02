import React from "react";
import Layout from "../components/Layout";
import Explore from "../components/Explore/Explore";

function ExplorePage() {
    return (
        <div>
            <Layout active={false}>
                <Explore recommendation={"Аниме"}/>
            </Layout>
        </div>
    );
}

export default ExplorePage;