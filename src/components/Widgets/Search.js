import React, {useCallback, useState} from "react";
import "../../styles/components/Widgets/Search.css"
import SearchIcon from "@material-ui/icons/Search";
import {useFetch} from "../../Hook/useFetch.hook";
import Post from "../Post/Post";


function Search() {
    const {request} = useFetch()
    const [post, setPost] = useState([])
    const [form, setForm] = useState({
        text: ''
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const [count, setCount] = useState(0)
    const findHandler = useCallback(async () => {
        try {
            const res = await request('https://twitter-ser.herokuapp.com/posts/search', 'POST', {...form})
            setPost(res)
            setCount(form.text.length)
        } catch (e) {
        }
    })

    return (
        <div className="search">
            <div className="search__input">
                <SearchIcon onClick={findHandler}
                    className="search__icon"/>
                <input name={'text'}
                       type={'text'}
                       value={form.text}
                       onChange={changeHandler}
                       placeholder="Поиск в Твиттере"/>
            </div>
            {  post.length > 0 ? post.map((posts) => {
                    return (
                        <Post post={posts}/>
                    )
            }): count !== 0 ? <h1>Не нашли</h1> : null}
        </div>
    )
}

export default Search;