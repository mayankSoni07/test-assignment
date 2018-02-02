/**
 * Common functions from all over the app, write here.
 */

import { AsyncStorage } from 'react-native';

/**
 * Used to calculate distance between two lat/long
 */
export const distance = (lat1, lon1, lat2, lon2, unit) => {
    var radlat1 = Math.PI * lat1 / 180
    var radlat2 = Math.PI * lat2 / 180
    var theta = lon1 - lon2
    var radtheta = Math.PI * theta / 180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180 / Math.PI
    dist = dist * 60 * 1.1515
    if (unit == "K") { dist = dist * 1.609344 }
    if (unit == "N") { dist = dist * 0.8684 }
    return dist
}

export const favourite = (locations, marker, dataToProps, isDetail, markerClicked) => {
    console.log("favourite : ", locations, marker);
    let temp = [];
    let obj = {};
    locations.map((val, index) => {
        if (val.name === marker.name) {
            Object.assign(obj, val);
            obj.isFav = !val.isFav;
            temp.push(obj);
        } else {
            temp.push(val);
        }
    });
    dataToProps(temp);
    AsyncStorage.setItem('locations', temp);
    if(isDetail){
        markerClicked(obj);
    }
}