import { View, Text, ScrollView, Dimensions, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import React, { useState } from 'react'
import homeStyle from './home.style'
import Header from '../../components/header'
import Carousel from 'react-native-reanimated-carousel';
import assets from '../../assets/assets';
import ProductCard from '../../components/card/ProductCard';



const HomeScreen = (props) => {
  const width = Dimensions.get('window').width;
  const [newArriveProduct, setNewArriveProduct] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 }

  ])

  const LayersRenders = ({ item, index }) => {
    return (
      <Image
        style={homeStyle.carosoleImage}
        source={item.image}
        resizeMode={'contain'}
      />
    );
  }
  return (
    <View style={homeStyle.container}>
      <Header
        onMenuPress={() => props.navigation.openDrawer()} />
      <ImageBackground
        source={assets.conatinerBg}
        style={homeStyle.imageContainer}
        resizeMode='cover'
      />
      <View>
        <Text style={homeStyle.newArive}>NEW ARRIVES</Text>
        <FlatList
          data={newArriveProduct}
          renderItem={({ item, index }) => (
            <ProductCard
            />
          )}
          numColumns={2}
        />
      </View>

    </View>
  )
}

export default HomeScreen