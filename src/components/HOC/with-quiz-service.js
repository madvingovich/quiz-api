import React from 'react';
import QuizService from "../../services/quiz-service";

const withQuizService = () => (Wrapped) => {
    const quizService = new QuizService();

    return (props) => {
        return <Wrapped {...props} quizService={quizService} />;
    };
};

export default withQuizService;