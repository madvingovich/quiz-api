import React from 'react';

const OpenQuestionBody = ({ value, onChange }) => {
    return (
        <textarea
            id="answer-text"
            className="form-control"
            value={value}
            onChange={onChange} />
    );
};

export default OpenQuestionBody;