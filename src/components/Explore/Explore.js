import React, {useEffect, useState} from 'react';
import {MoreHorizOutlined} from "@material-ui/icons";
import RecommendIcon from '@mui/icons-material/Recommend';
import Actual from "../Widgets/Actual";
import "../../styles/components/Explore/Explore.css"
import Post from "../Post/Post";
import {useFetch} from "../../Hook/useFetch.hook";

function Explore({recommendation}) {

    const {request} = useFetch()
    const[actual,setActual]=useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await request('https://twitter-ser.herokuapp.com/actual');
            setActual(response);
        };
        fetchData();
    }, [setActual]);

    return (
        <div className={"explore"}>
            <Actual/>
            <div className={"explore__header"}>
                <div className={"explore__recommend"}>
                    <RecommendIcon className={"exploreRecIcon"}/>
                    <h2>{recommendation}</h2>
                </div>
                <MoreHorizOutlined className={"explore__moreIcon"}/>
            </div>

            {actual.slice(0).reverse().map((item) => (
                <Post post = {item}/>))}
        </div>
    )
}

export default Explore;