import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {inputText} from "./redux/action";

const Title = (props) => {
    const dispatch = useDispatch()
    const {text} = useSelector(state => state.text)
    console.log(text)
    const handleChange = (e) => {
        dispatch(inputText(e.target.value))
    }
    return (
        <div className='  h-auto ' >
            <input type="text"  onChange={handleChange} className='h-full w-full h-8 outline-none border border-black px-2 ' />
            <div className='h-8 w-full '>
                {text && (
                    <p className=''>{text}</p>
                )}
            </div>
        </div>
    );
};

export default Title;
