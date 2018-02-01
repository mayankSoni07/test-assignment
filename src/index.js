/**
 * It is the Main file from where Flow starts.
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

/**
 * Imported Redux store
 */
import store from './redux/store/configureStore';
import Routes from './config/routes';

export default class Test extends Component {
    render() {
        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        );
    }
}
