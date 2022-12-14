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
        fontSize: 16,
        marginTop: 10,
        marginLeft: 10,
        fontWeight: '800',
        letterSpacing: 1,
    },
    imageContainer: {
        width: width,
        height: 150
    },
})