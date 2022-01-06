import React from 'react';
import Loader from "react-loader-spinner";
import {useSelector} from "react-redux";

const Spin = () => {
    const {loading} = useSelector(state => state.app)
    return (
        <>
            {loading && (
                <div className='fixed left-0 top-0  w-full h-screen flex justify-center items-center'>
                    <Loader
                        type="TailSpin"
                        color="#00BFFF"
                        height={20}
                        width={20}
                        visible={loading}
                    />
                </div>
            )}
        </>

    );
};

export default Spin;
