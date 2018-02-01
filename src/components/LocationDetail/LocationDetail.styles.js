import { StyleSheet } from 'react-native';
import { width, height } from '../../lib/device';
import { colorCode } from '../../config/constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    pageHeading: {
        marginTop: 20,
        fontSize: 25,
        fontWeight: "500",
        color: colorCode
    },
    nameText: {
        fontSize: 20,
        fontWeight: "500",
        color: colorCode,
        alignSelf: 'flex-start',
        marginLeft: 10
    },
    addressText: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: "300",
        color: colorCode,
        alignSelf: 'flex-start',
        marginLeft: 10
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
    },
    backButtonView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        elevation: 1,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colorCode,
        padding: 10,
    },
    backButton: {
        fontSize: 16,
        fontWeight: "500",
        color: colorCode,
    }
});

export default styles;