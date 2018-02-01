import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    render() {
        const store = createStore(reducers);
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default App;