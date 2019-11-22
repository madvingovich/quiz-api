import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from "../loader";
import Questions from "../questions";
import withQuizService from '../HOC/with-quiz-service'
import * as actions from '../../actions';

class Quiz extends Component {

    componentDidMount() {
        this.props.fetchQuestions();
    }

    render() {
        const { loading, error, quizDone, apiQuiz: { Quiz: quiz }} = this.props;

        if(loading) return <Loader />;

        if(error || !quiz) return <h1 className="py-5 text-center">Нет вопросов.</h1>;

        if(quizDone) return <h1 className="py-5 text-center">На этом все! Спасибо, досвидули:)</h1>;

        return (
            <Questions quiz={quiz} />
        );
    }
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch, { quizService }) => {
    return bindActionCreators({
        fetchQuestions: actions.fetchQuestions(quizService)
    }, dispatch);

};

export default withQuizService()(connect(mapStateToProps, mapDispatchToProps)(Quiz));
