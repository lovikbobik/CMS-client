import React from "react";
import Main from "../components/Main/Main";
import Layout from "../components/Layout";

function HomePage() {
    return (
        <div>
            <Layout active={true}>
                <Main/>
            </Layout>
        </div>
    );
}

export default HomePage;