import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAnswer, endQuiz } from "../../actions";
import MarkQuestionBody from "../mark-question-body";
import SingleChoiceQuestionBody from '../single-choice-question-body';
import OpenQuestionBody from "../open-question-body";

class QuestionItem extends Component {

    getInitialState = () => {
        return {
            checkedId: null,
            singleAnswer: null,
            answerText: '',
            isAnswerEmpty: false
        };
    };

    state = this.getInitialState();

    changeCheckedId = (e) => {
        this.setState({
            checkedId: parseInt(e.target.value),
            isAnswerEmpty: false
        });
    };

    changeAnswerText = (e) => {
        if(e.target.value.length > 1000) return;
        this.setState({
            answerText: e.target.value,
            isAnswerEmpty: false
        });
    };

    changeSingleAnswer = (e) => {
        this.setState({
            singleAnswer: e.target.value,
            isAnswerEmpty: false
        });
    };

    onAnswer = () => {
        const {
            moveToTheNextQuestion,
            question: { QuizQuestionType: { Id }}
        } = this.props;

        const { checkedId, singleAnswer, answerText } = this.state;

        if(Id !== 1) {
            //question type isn't group
            if(!checkedId && !singleAnswer && !answerText) {
                //no answer
                this.setState({isAnswerEmpty: true});
                return;
            }

            const { Id, QuizId } = this.props.question;

            const answer = {
                QuizQuestionId: Id,
                QuizPassingId: QuizId,
                Answer: checkedId || singleAnswer || answerText
            };

            this.props.addAnswer(answer);

            this.setState(this.getInitialState())
        }

        moveToTheNextQuestion();
    };

    render() {
        const { question, endQuiz } = this.props;
        const { isAnswerEmpty } = this.state;

        if(!question) {
            endQuiz();
            return null;
        }

        const { QuestionText: text } = question;
        const buttonClassName = isAnswerEmpty ? 'btn-danger' : 'btn-primary';
        const emptyAnswerWarning = <p className="text-center">Нельзя отправить пустой ответ.</p>;

        return (
            <div className="question">
                <p className="text-center">{text}</p>

                {this.renderQuestionBody(question)}

                <div className="d-flex justify-content-center">
                    <button
                        onClick={this.onAnswer}
                        className={`btn my-4 ${buttonClassName}`}>
                        Далее
                    </button>
                </div>

                { isAnswerEmpty ? emptyAnswerWarning : null }
            </div>
        );
    }

    renderQuestionBody = (question) => {
        const {
            QuizQuestionType: { Id: questionTypeId },
            MarkFrame: markFrame,
            PossibleAnswers: possibleAnswers
        } = question;

        const { checkedId, singleAnswer, answerText } = this.state;

        switch (questionTypeId) {
            case 6:
                //mark
                return <MarkQuestionBody
                    markFrame={markFrame[0]}
                    onChange={this.changeCheckedId}
                    checkedId={checkedId} />;

            case 5:
                //open
                return <OpenQuestionBody
                    value={answerText}
                    onChange={this.changeAnswerText} />;

            case 2:
                //single choice
                return <SingleChoiceQuestionBody
                    possibleAnswers={possibleAnswers}
                    onChange={this.changeSingleAnswer}
                    checked={singleAnswer}/>;

            default:
                //group
                return null;
        }
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addAnswer: (answer) => dispatch(addAnswer(answer)),
        endQuiz: () => dispatch(endQuiz())
    };
};

export default connect(null, mapDispatchToProps)(QuestionItem);