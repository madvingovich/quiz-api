import React from 'react';
import ErrorBoundary from "../error-boundary";
import Quiz from "../quiz";
import { Provider } from 'react-redux';
import store from "../../store";

const App = () => {
    return (
        <ErrorBoundary>
            <Provider store={store}>
                <Quiz />
            </Provider>
        </ErrorBoundary>
    );
};

export default App;
