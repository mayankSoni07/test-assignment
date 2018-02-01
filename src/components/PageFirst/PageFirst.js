import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native';

import styles from './PageFirst.styles';
import { Header, MapView, ListView } from '../index';
import { changeView, dataToProps } from '../../redux/actions';
import { getData } from '../../services';
import { distance } from '../../Utils';

let self;

/**
 * @class
 * represents the PageFirst component
 */
class PageFirst extends Component {

    constructor(props) {
        super(props);
        this.state = {
            markerDetail: {}
        };
    }

    componentWillMount() {
        self = this;
        this.setState({ markerDetail: {} });
        /**
         * API call to get locations from server.
         */
        getData()
            .then((result) => result.json())
            .then((result) => {
                this.props.dataToProps(result);
            })
            .catch((err) => console.log(err))
    }

    /**
     * used to render marker detail.
     */
    renderMarkerDetail() {
        let marker = self.state.markerDetail;
        return (
            <View style={styles.markerDetailOuter}>
                <View style={styles.scrollItem}>
                    <View style={styles.nameArrowView}>
                        <Text style={styles.nameText}>{marker.name}</Text>
                        <TouchableOpacity onPress={() => self.props.navigation.navigate('locationDetail', { markerDetail: marker })} >
                            <Image style={styles.upImg} source={require('../../assests/up.png')} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.addressText}>{marker.address}</Text>
                    <View style={styles.tagOuter}>
                        {marker.store_tags && marker.store_tags.map((tag, index) => {
                            return (
                                <View key={index} style={styles.tagView}>
                                    <Text style={styles.tagText}>{tag}</Text>
                                </View>)
                        })}
                    </View>
                    <View style={styles.seperator} />
                    <Text style={styles.nameText}>Store Hours</Text>
                    <Text style={styles.addressText}>Open Now - 3 more Hours</Text>
                    <View style={styles.footView}>
                        <View style={styles.callStoreView}>
                            <Text style={styles.footText}>Call Store</Text>
                        </View>
                        <View style={styles.orderNowView}>
                            <Text style={styles.footText}>Order Now</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    /**
     * Callback function to open marker detail
     * @param {Clicked marker object} marker 
     */
    markerClicked(marker) {
        self.setState({ markerDetail: marker });
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.isListView ?
                    <ListView navigation={this.props.navigation} markerClicked={this.markerClicked} locations={this.props.locations} />
                    :
                    <MapView navigation={this.props.navigation} markerClicked={this.markerClicked} locations={this.props.locations} />
                }
                <Header navigation={this.props.navigation} locations={this.props.locations} changeView={this.props.changeView} isListView={this.props.isListView} />
                {Object.keys(this.state.markerDetail).length > 0 && this.renderMarkerDetail()}
            </View>
        );
    }
}

export default connect(({ mainReducer }) => ({ ...mainReducer }), { changeView, dataToProps })(PageFirst);