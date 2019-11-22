import React from 'react';
import './loader.css';

const Loader = () => {
    return (
        <div className="loader py-5 d-flex align-items-center justify-content-center">
            <div className="lds-ellipsis">
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
            </div>
        </div>
    );
};

export default Loader;