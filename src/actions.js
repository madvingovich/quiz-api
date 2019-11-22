
export const fetchQuestions = (quizService) => () => (dispatch) => {
    dispatch(questionsRequested());

    // setTimeout(() => {
        quizService
            .getQuiz()
            .then((questions) => {
                dispatch(questionsLoaded(questions));
            })
            .catch((error) => {
                dispatch(questionsError(error));
            });
    // }, 1000)
};

export const questionsRequested = () => {
    return {
        type: 'FETCH_QUIZ_REQUEST'
    };
};

export const questionsLoaded = (questions) => {
    return {
        type: 'FETCH_QUIZ_SUCCESS',
        payload: questions
    }
};

export const questionsError = () => {
    return {
        type: 'FETCH_QUIZ_FAILURE',
    };
};

export const addAnswer = (answer) => {
    return {
        type: 'ADD_ANSWER',
        payload: answer
    };
};

export const endQuiz = () => {
    return { type: 'END_QUIZ'}
};