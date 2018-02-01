/**
 * All the routes defined in this file.
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import { PageFirst, LocationDetail, Search } from '../components';

const mapNavigationStateParamsToProps = (SomeComponent) => {
    return class extends Component {
        static navigationOptions = SomeComponent.navigationOptions;
        render() {
            const {navigation: {state: {params}}} = this.props
            return <SomeComponent {...params} {...this.props} />
        }
    }
}

/**
 * Create TabNavigator instance with components, screen names and options.
 */
const AppStack = StackNavigator({
    /**
     * Define screens with components
     */
    pageFirst: { screen: mapNavigationStateParamsToProps(PageFirst) },
    locationDetail: { screen: mapNavigationStateParamsToProps(LocationDetail) },
    search: { screen: mapNavigationStateParamsToProps(Search) },
}, { headerMode: "none" });

export default class Routes extends Component {
    render() {
        return (
            <AppStack />
        )
    }
}