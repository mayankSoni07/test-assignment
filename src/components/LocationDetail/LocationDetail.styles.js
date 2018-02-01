import { StyleSheet } from 'react-native';
import { width, height } from '../../lib/device';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    pageHeading:{
        marginTop: 20,
        fontSize: 25,
        fontWeight: "500",
        color: '#fff'
    }
});

export default styles;