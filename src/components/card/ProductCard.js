import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../../utils/colors'

interface ProductCardProps {
    item: Object,
    indes: Number
}

const ProductCard = (props) => {
    return (
        <View style={styles.conatiner}>
            <Text>ProductCard</Text>
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({

    conatiner: {
        backgroundColor: colors.productBackGround,
        flex: 1,
        marginHorizontal: 7,
        marginBottom: 5,
        minHeight: 150,
        maxHeight: 300,
        borderRadius: 7,
    },
    badgeView: {
        backgroundColor: colors.tintYellow,
        flexWrap: 'wrap'
    }
});
