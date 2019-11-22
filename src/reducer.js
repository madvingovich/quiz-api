
const initialState = {
    apiQuiz: {},
    loading: false,
    error: false,
    quizDone: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_QUIZ_REQUEST':
            return {
                ...state,
                loading: true,
            };

        case 'FETCH_QUIZ_SUCCESS':
            return {
                ...state,
                apiQuiz: action.payload,
                loading: false,
            };

        case 'FETCH_QUIZ_FAILURE':
            return {
                ...state,
                loading: false,
                error: true,
            };

        case 'ADD_ANSWER':
            const { payload: answer } = action;
            return {
                ...state,
                apiQuiz: {
                    ...state.apiQuiz,
                    Answers: [
                        ...state.apiQuiz.Answers,
                        answer
                    ]
                }
            };

        case 'END_QUIZ':
            console.log('--->', state);
            return {
                ...state,
                quizDone: true
            };

        default:
            return state;
    }
};

export default reducer;