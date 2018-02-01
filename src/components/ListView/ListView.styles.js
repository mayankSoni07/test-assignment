import { StyleSheet } from 'react-native';

import normalize, { moderateScale, verticalScale } from '../../lib/normalize';
import { width, height } from '../../lib/device';
import { colorCode } from '../../config/constants';

const styles = StyleSheet.create({
  listView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  lineView: {
    marginTop: 50,
    width: width,
    height: 1,
    backgroundColor: colorCode,
  },
  scrollContainer: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollItem: {
    width: width,
    paddingHorizontal: 15,
    paddingTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "500",
    color: colorCode,
  },
  milesText: {
    fontSize: 14,
    fontWeight: "300",
    color: colorCode,
  },
  adressView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  arrowImg:{
    height: 15,
    width: 15
  },
  addressText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "300",
    color: colorCode,
  },
  tagOuter: {
    flexDirection: 'row',
    marginTop: 10
  },
  tagView: {
    elevation: 1,
    borderRadius: width / 4,
    borderWidth: 1,
    borderColor: colorCode,
    margin: 5
  },
  tagText: {
    fontSize: 12,
    margin: 5,
    fontWeight: "200",
    color: colorCode,
  },
  seperator: {
    marginTop: 15,
    width: width - 80,
    height: 1,
    alignSelf: 'center',
    backgroundColor: colorCode
  }
});

export default styles;