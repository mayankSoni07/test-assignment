import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';

import styles from './LocationDetail.styles';

/**
 * @class
 * represents the Location Detail component
 */
export default class LocationDetail extends Component {
    render() {
        console.log('location detail : ', this.props.markerDetail)
        let marker = this.props.markerDetail;
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.pageHeading}>{marker.name}</Text>
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
