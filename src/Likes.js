import React from 'react';

const Likes = (props) => {
    return (
        <div className='h-auto w-full flex items-center justify-evenly mt-2'>
            <button className='w-36 h-9 border border-black'>♥ {props.likes}</button>
            <button className='w-36 h-9 border border-black'>Dislikes</button>
        </div>
    );
};

export default Likes;
