import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    state = {
        hasError: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true });
        console.log('--->', error);
        console.log('--->', errorInfo);
    }

    render() {
        return this.state.hasError ?
            <h1 className="py-5 text-center">Sorry, something wrong. Please, try later.</h1> :
            this.props.children;
    }
};