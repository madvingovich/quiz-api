import React, { Component } from 'react';
import QuestionItem from "../question-item";

class Questions extends Component {
    state = {
        activeQuestionIndex: 0
    };

    moveToTheNextQuestion = () => {
        this.setState((state) => {
            return {
                activeQuestionIndex: state.activeQuestionIndex + 1
            };
        });
    };

    render() {
        const { quiz: { Questions: questions, Name: name }} = this.props;
        const { activeQuestionIndex: index } = this.state;
        const activeQuestion = questions[index];

        return (
            <div className="container">
                <h2 className="text-center py-4">
                    {name}
                </h2>
                <QuestionItem
                    question={activeQuestion}
                    moveToTheNextQuestion={this.moveToTheNextQuestion} />
            </div>
        );
    };
}

export default Questions;