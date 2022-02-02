import React, {useContext, useState} from "react";
import {Avatar, Button} from "@mui/material";
import '../../styles/components/Main/Tweet.css';
import CropOriginalRoundedIcon from '@mui/icons-material/CropOriginalRounded';
import GifOutlinedIcon from '@mui/icons-material/GifOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import {useFetch} from "../../Hook/useFetch.hook";
import {AuthContext} from "../Auth/AuthContext";

function Tweet(){

    const {userId} = useContext(AuthContext)
    const {request} = useFetch()
    const [form, setForm] = useState({
        userId: userId,
        text: String
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const addHandler = async () => {
        await request('https://twitter-ser.herokuapp.com/posts', 'POST', {...form});
        window.location.href = "/";
    }

    return(
        <div className="tweet">
            <form>
                <div className="tweet__input">
                    <Avatar src="https://img2.freepng.ru/20180425/auw/kisspng-master-s-degree-academic-degree-graduate-universit-5ae0f678568f05.7552695615246926003546.jpg" />
                    <input
                        placeholder="Что происходит?"
                        onChange={changeHandler}
                        value={form.text}
                        name={'text'}
                        type="text"/>
                </div>
                <div className="tweet__icons">
                    <CropOriginalRoundedIcon className="tweet__icon"/>
                    <GifOutlinedIcon className="tweet__icon"/>
                    <InsertChartOutlinedIcon className="tweet__icon"/>
                    <EmojiEmotionsOutlinedIcon className="tweet__icon"/>
                    <DateRangeOutlinedIcon className="tweet__icon"/>

                <Button  onClick={addHandler}
                    className="tweet__button">Твитнуть</Button>
                    </div>
            </form>
        </div>
    )
}

export default Tweet;