import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './Header.styles';

/**
 * @class
 * represents the Header component
 */
export default class Header extends Component {
    render() {
        return (
            <View style={styles.searchView}>
                <View style={styles.imgView}>
                    <TouchableOpacity onPress={() => {
                        this.props.markerClicked({});
                        this.props.navigation.navigate('search', {
                            locations: this.props.locations, navigation: this.props.navigation,
                            dataToProps: this.props.dataToProps, markerClicked: this.props.markerClicked
                        })
                    }} >
                        <Image style={styles.imageSearch} source={require('../../assests/find.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.locationTitle}>
                    <Text style={styles.titleText}>LOCATIONS</Text>
                </View>
                <View style={styles.locationList}>
                    <TouchableOpacity onPress={() => this.props.changeView(!this.props.isListView)} >
                        {this.props.isListView ?
                            <Text style={styles.listViewText}>Map View</Text>
                            :
                            <Text style={styles.listViewText}>List View</Text>
                        }
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}