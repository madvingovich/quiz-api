import React from 'react';
import RadioInput from "../radio-input";

const MarkQuestionBody = ({ markFrame, onChange, checkedId }) => {
    const {
        LowerValue: lowerValue,
        UpperValue: upperValue
    } = markFrame;

    let radioButtons = [];

    for(let i = upperValue; i > lowerValue - 1; i--) {
        radioButtons.push(
            <RadioInput
                key={i}
                value={i}
                onChange={onChange}
                checked={checkedId} />
        );
    }

    return radioButtons;
};

export default MarkQuestionBody;