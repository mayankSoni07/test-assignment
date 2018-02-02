import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import styles from './LocationDetail.styles';
import { favourite } from '../../Utils/AppUtils';

let self;
let marker = {};

/**
 * @class
 * represents the Location Detail component
 */
class LocationDetail extends Component {

    componentWillMount() {
        self = this;
        marker = this.props.markerDetail;
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.locations){
            nextProps.locations.map((val,index)=>{
                if(val.name === marker.name){
                    marker = val;
                }
            })
        }
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.nameView}>
                    <Text style={styles.pageHeading}>{marker.name}</Text>
                    <TouchableOpacity onPress={() => {
                        favourite(self.props.locations, marker, self.props.dataToProps, true, self.props.markerClicked)
                    }}>
                        {marker.isFav ?
                            <Image style={styles.img} source={require('../../assests/favYes.png')} />
                            :
                            <Image style={styles.img} source={require('../../assests/favNo.png')} />
                        }
                    </TouchableOpacity>
                </View>
                <Text style={styles.addressText}>ID : {marker.franchisee_id}</Text>
                <Text style={styles.addressText}>Name : {marker.name}</Text>
                <Text style={styles.addressText}>Address : {marker.address}</Text>
                <Text style={styles.addressText}>Phone Number : {marker.phone_number}</Text>
                <Text style={styles.addressText}>Email : {marker.loc_email}</Text>
                <Text style={styles.addressText}>Store Number : {marker.store_number}</Text>
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
                <TouchableOpacity onPress={() => this.props.navigation.dispatch(NavigationActions.back())}>
                    <View style={styles.backButtonView}>
                        <Text style={styles.backButton}>Back</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

export default connect(({ mainReducer }) => ({ ...mainReducer }))(LocationDetail);