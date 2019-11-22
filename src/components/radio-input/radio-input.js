import React from 'react';

const RadioInput = ({ value, onChange, checked }) => {
    return (
        <label className="d-flex align-items-center justify-content-center">
            <p className="mb-0 mr-3">{value}</p>
            <input
                onChange={onChange}
                checked={value === checked}
                type="radio"
                value={value}
                name="radio"/>
        </label>
    );
};

export default RadioInput;