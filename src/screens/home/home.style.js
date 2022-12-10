import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../utils/colors'
const width = Dimensions.get('window').width;
export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
    },
    offerContainer: {
        backgroundColor: colors.black,
        height: '10%'
    },
    newArive: {
        color: colors.black,
        fontSize: 18
    },
    carosoleImage: {
        width: width,
        height: 100
    },
    carosalContaoner: {
        flex: 1,
        width: '100%',
    }
})