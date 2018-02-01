import { StyleSheet } from 'react-native';

import normalize, { moderateScale, verticalScale } from '../../lib/normalize';
import { width } from '../../lib/device';
import { colorCode } from '../../config/constants';

const styles = StyleSheet.create({
  searchView: {
    width: width,
    position: 'absolute',
    top: 10,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgView: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageSearch: {
    height: 25,
    width: 25
  },
  locationTitle: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 22,
    fontWeight: '200',
    color: colorCode
  },
  locationList: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listViewText: {
    fontSize: 14,
    fontWeight: '900',
    color: colorCode
  }
});

export default styles;