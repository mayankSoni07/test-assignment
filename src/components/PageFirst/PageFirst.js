import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button, Image, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';

import styles from './PageFirst.styles';
import { Header, MapView, ListView } from '../index';
import { changeView, dataToProps } from '../../redux/actions';
import { getData } from '../../services';
import { distance, favourite } from '../../Utils';

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
                if (result.length) {
                    let temp = [];
                    result.map((val, index) => {
                        let obj = val;
                        obj.isFav = false;
                        temp.push(obj);
                    });
                    this.props.dataToProps(temp);
                    AsyncStorage.setItem('locations', temp);
                }

            })
            .catch((err) => console.log(err))
    }

    componentWillReceiveProps(nextProps){
        console.log('rec prps', nextProps.locations);
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

                        <TouchableOpacity onPress={() => { favourite(self.props.locations, marker, self.props.dataToProps, true, self.markerClicked) }}>
                            {marker.isFav ?
                                <Image style={styles.upImg} source={require('../../assests/favYes.png')} />
                                :
                                <Image style={styles.upImg} source={require('../../assests/favNo.png')} />
                            }
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => self.props.navigation.navigate('locationDetail', {
                            dataToProps: self.props.dataToProps, markerDetail: marker, markerClicked: self.markerClicked, locations: self.props.locations
                        })} >
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
                    <ListView dataToProps={this.props.dataToProps} navigation={this.props.navigation} markerClicked={this.markerClicked} locations={this.props.locations} />
                    :
                    <MapView dataToProps={this.props.dataToProps} navigation={this.props.navigation} markerClicked={this.markerClicked} locations={this.props.locations} />
                }
                <Header dataToProps={this.props.dataToProps} navigation={this.props.navigation} locations={this.props.locations} changeView={this.props.changeView} isListView={this.props.isListView} markerClicked={this.markerClicked} />

                {Object.keys(this.state.markerDetail).length > 0 && this.renderMarkerDetail()}
            </View>
        );
    }
}

export default connect(({ mainReducer }) => ({ ...mainReducer }), { changeView, dataToProps })(PageFirst);