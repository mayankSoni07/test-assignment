import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

import styles from './ListView.styles';
import { distance } from '../../Utils';

let self;

/**
 * @class
 * represents the Header component
 */
export default class ListViewClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: {}
        };
    }

    componentWillMount() {
        self = this;
        this.props.markerClicked({});
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({ current: position.coords });
            console.log("Position : ", position);
        }, (error) => {
            console.log(JSON.stringify(error));
        });
    }

    displayScrollItem(value, index) {
        let dist = parseInt(distance(value.latitude, value.longitude, self.state.current.latitude, self.state.current.longitude, "N"));
        return (
            <View key={index} style={styles.scrollItem}>
                <Text style={styles.nameText}>{value.name}</Text>
                <Text style={styles.milesText}>{dist > 999 ? parseInt(dist / 1000) : dist}{dist > 999 ? "k miles" : " miles"} </Text>
                <View style={styles.adressView}>
                    <Text style={styles.addressText}>{value.address}</Text>
                    <Image style={styles.arrowImg} source={require('../../assests/arrow.png')} />
                </View>
                <View style={styles.tagOuter}>
                    {value.store_tags && value.store_tags.map((tag, index) => {
                        return (
                            <View key={index} style={styles.tagView}>
                                <Text style={styles.tagText}>{tag}</Text>
                            </View>)
                    })}
                </View>
                <View style={styles.seperator} />
            </View>
        );
    }

    render() {
        return (
            <View style={styles.listView}>
                <View style={styles.lineView} />
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {this.props.locations.length > 0 && this.props.locations.map((value, index) => {
                        return self.displayScrollItem(value, index)
                    })}
                </ScrollView>
            </View>
        )
    }
}