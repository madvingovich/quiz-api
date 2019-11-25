import React from 'react';
import QuizService from "../../services/quiz-service";

const quizService = new QuizService();

const withQuizService = () => (Wrapped) => {
    return (props) => {
        return <Wrapped {...props} quizService={quizService} />;
    };
};

export default withQuizService;