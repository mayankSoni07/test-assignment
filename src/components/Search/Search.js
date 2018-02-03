import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';

import styles from './Search.styles';
import { distance, favourite } from '../../Utils';

let self;

/**
 * @class
 * represents the Search component
 */
class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: {},
            locations: [],
            searchInput: ""
        };
    }

    componentWillMount() {
        self = this;
        /**
         * Used to get current location
         */
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({ current: position.coords, locations: this.props.locations });
        }, (error) => {
            console.log(error);
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.locations) {
            this.setState({ locations: nextProps.locations });
        }
    }

    /**
     * Used to display location items in scroll view.
     */
    displayScrollItem(value, index) {
        /**
         * distance utility used here to get distance from current locaion.
         */
        let dist = parseInt(distance(value.latitude, value.longitude, self.state.current.latitude, self.state.current.longitude, "N"));
        return (
            <View key={index} style={styles.scrollItem}>
                <View style={styles.nameView}>
                    <Text style={styles.nameText}>{value.name}</Text>
                    <TouchableOpacity onPress={() => {
                        favourite(self.props.locations, value, self.props.dataToProps, false, self.props.markerClicked)
                    }}>
                        {value.isFav ?
                            <Image style={styles.favImg} source={require('../../assests/favYes.png')} />
                            :
                            <Image style={styles.favImg} source={require('../../assests/favNo.png')} />
                        }
                    </TouchableOpacity>
                </View>
                <Text style={styles.milesText}>{dist > 999 ? parseInt(dist / 1000) : dist}{dist > 999 ? "k miles" : " miles"} </Text>
                <View style={styles.adressView}>
                    <Text style={styles.addressText}>{value.address}</Text>

                    <TouchableOpacity onPress={() => self.props.navigation.navigate('locationDetail', {
                        dataToProps: self.props.dataToProps, markerDetail: value, markerClicked: self.props.markerClicked,
                        locations: self.props.locations
                    })} >
                        <Image style={styles.arrowImg} source={require('../../assests/arrow.png')} />
                    </TouchableOpacity>

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

    /**
     * Used to search.
     * @param {TextInput text string} text 
     */
    searchStart(text) {
        let val = text.trim();
        let searchedValue = [];

        this.state.locations.map((value, index) => {
            if (value.name.toLowerCase().includes(val.toLowerCase()) || value.brand.toLowerCase().includes(val.toLowerCase()) ||
                value.address.toLowerCase().includes(val.toLowerCase()) || value.city.toLowerCase().includes(val.toLowerCase()) ||
                value.country.toLowerCase().includes(val.toLowerCase())
            ) {
                searchedValue.push(value);
            }
        })

        if (val === "") {
            this.setState({ searchInput: text, locations: this.props.locations });
        } else {
            this.setState({ searchInput: text, locations: searchedValue });
        }
    }

    render() {
        return (
            <View style={styles.listView}>
                <View style={styles.searchView}>
                    <View style={styles.searchBox}>
                        <Image style={styles.searchImg} source={require('../../assests/find.png')} />
                        <TextInput style={styles.searchTextinput} value={this.state.searchInput}
                            onChangeText={(text) => this.searchStart(text)}
                        />
                        <TouchableOpacity onPress={() => this.setState({ searchInput: "", locations: this.props.locations })} >
                            <Image style={styles.closeImg} source={require('../../assests/close.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cancelView} >
                        <TouchableOpacity onPress={() => this.props.navigation.dispatch(NavigationActions.back())}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.lineView} />
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {this.state.locations.length > 0 && this.state.locations.map((value, index) => {
                        return self.displayScrollItem(value, index)
                    })}
                </ScrollView>
            </View>
        )
    }
}

export default connect(({ mainReducer }) => ({ ...mainReducer }))(Search);