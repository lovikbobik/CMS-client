import React, {useEffect, useState} from 'react';
import FollowWidgetDetails from "./FollowWidgetDetails";
import "../../styles/components/Widgets/Widgets.css"
import {useFetch} from "../../Hook/useFetch.hook";

export default function FollowWidget() {

    const {request} = useFetch()
    const [user, setUser] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await request('https://twitter-ser.herokuapp.com/users');
            setUser(response);
        };
        fetchData();
    }, [setUser]);

    return (
        <div className={"widget__container"}>
            <h2>За кем следовать</h2>
            <div className={"widget__content"}>
                {user.map(items => {
                        if (items.verified) {
                            return <FollowWidgetDetails item={items}/>
                        }
                    }
                )}
            </div>
        </div>
    )
}