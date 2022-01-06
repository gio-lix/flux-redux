import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {commentsDelete, commentsUpdate} from "../redux/action";

const SingleComments = ({text, id}) => {
    const [commentsText, setCommentsText] = useState('');
    const dispatch = useDispatch()

    useEffect(() => setCommentsText(text) ,[text])

    const handleInput = e => setCommentsText(e.target.value)

    const handleUpdate = e => {
        e.preventDefault()
        dispatch(commentsUpdate(commentsText, id))
    }
    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(commentsDelete(id))
    }

    return (
        <div className='border border-black flex items-center w-72 '>
            <form onSubmit={handleUpdate} className='flex'>
                <button onClick={handleDelete}>&times;</button>
                <input value={commentsText} onChange={handleInput} type="text" className='pl-3 outline-none'/>
                <input type='submit' hidden/>
            </form>
        </div>
    );
};

export default SingleComments;
