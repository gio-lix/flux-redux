import React, {useEffect, useState} from 'react';
import SingleComments from "./components/SingleComments";
import {useDispatch, useSelector} from "react-redux";
import {commentsCreat, commentsLoad} from "./redux/action";
import uniqid from 'uniqid'

const Comments = () => {
    const dispatch = useDispatch()
    const [textComments, setTextComments] = useState();
    const {comments} = useSelector(state => state.comments)

    const textHandler = e =>   setTextComments(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()
        const id = uniqid()
        dispatch(commentsCreat(textComments,id ))
    }

    useEffect(() => {
        dispatch(commentsLoad())
    }, []);

    return (
        <div className=' w-auto mx-1'>
            <form onSubmit={handleSubmit} className='bg-red-400 w-full my-1'>
                <input value={textComments} onChange={textHandler} type="text" className='border border-black w-full outline-none'/>
                <input type='submit' hidden/>
            </form>
            {comments?.map(el => (
                <SingleComments {...el} key={el.id} />
            ))}
        </div>
    );
};

export default Comments;
