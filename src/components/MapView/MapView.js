import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import styles from './MapView.styles';

let self;

/**
 * @class
 * represents the MapViewClass component
 */
export default class MapViewClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0,
            }
        };
    }

    componentWillMount() {
        self = this;
        this.props.markerClicked({});
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                current: {
                    latitude: position.coords.latitude, longitude: position.coords.longitude,
                    latitudeDelta: position.coords.accuracy, longitudeDelta: position.coords.accuracy
                }
            });
        }, (error) => {
            console.log(error);
        });
    }

    renderMarker(marker, index) {
        let temp = {};
        temp.latitude = parseFloat(marker.latitude);
        temp.longitude = parseFloat(marker.longitude);
        temp.latitudeDelta = parseFloat(marker.latitudeDelta);
        temp.longitudeDelta = parseFloat(marker.longitudeDelta);

        return <Marker
            key={index}
            coordinate={temp}
            title={marker.brand}
            description={marker.name}
            onPress={() => self.props.markerClicked(marker)}
        />
    }

    render() {
        return (
            <MapView
                showsUserLocation={true}
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={this.state.current}
            >
                {this.props.locations.length > 0 && this.props.locations.map((marker, index) => {
                    return self.renderMarker(marker, index);
                })}
            </MapView>
        )
    }
}
