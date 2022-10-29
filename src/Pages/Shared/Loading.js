import React from 'react';

const Loading = () => {
    return (
        // <div className='h-screen flex justify-center items-center'>
        //     <button className="btn loading">loading</button>
        // </div>
        <div className="flex items-center justify-center">
            <div className="w-16 mt-40 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;