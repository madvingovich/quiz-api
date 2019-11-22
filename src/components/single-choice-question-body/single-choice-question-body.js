import React from 'react';
import RadioInput from "../radio-input";

const SingleChoiceQuestionBody = ({ possibleAnswers, onChange, checked }) => {
    return possibleAnswers.map(({ AnswerText: value }, idx) => {
        return (
            <RadioInput
                key={idx}
                value={value}
                onChange={onChange}
                checked={checked} />
        );
    });
};

export default SingleChoiceQuestionBody;