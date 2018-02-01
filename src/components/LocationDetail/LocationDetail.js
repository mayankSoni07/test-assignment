import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './LocationDetail.styles';

/**
 * @class
 * represents the Location Detail component
 */
export default class LocationDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.pageHeading}>PAGE SECOND</Text>
            </View>
        )
    }
}
