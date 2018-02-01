import { StyleSheet } from 'react-native';

import { width, height } from '../../lib/device';
import { colorCode } from '../../config/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  markerDetailOuter: {
    position: 'absolute',
    bottom: 20,
    width: width - 40,
    elevation: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colorCode,
    backgroundColor: '#fff'
  },
  scrollItem: {
    paddingHorizontal: 15,
    paddingTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  nameArrowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  upImg: {
    height: 25,
    width: 25
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
  arrowImg: {
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
    marginBottom: 15,
    width: width - 80,
    height: 1,
    alignSelf: 'center',
    backgroundColor: colorCode
  },
  footView: {
    flexDirection: 'row',
    margin: 20
  },
  callStoreView: {
    flex: 0.5,
    marginRight: 20,
    padding: 10,
    elevation: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colorCode,
    alignItems: 'center',
    justifyContent: 'center'
  },
  orderNowView: {
    flex: 0.5,
    marginLeft: 20,
    padding: 10,
    elevation: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colorCode,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footText: {
    fontSize: 14,
    fontWeight: "500",
    color: colorCode,
  }
});

export default styles;