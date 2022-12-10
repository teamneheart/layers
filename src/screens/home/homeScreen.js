import { View, Text, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import homeStyle from './home.style'
import Header from '../../components/header'
import Carousel from 'react-native-reanimated-carousel';
import assets from '../../assets/assets';



const HomeScreen = (props) => {
  const width = Dimensions.get('window').width;
  const [layesData, setLayersData] = useState([
    { id: 1, image: assets.crasole1 },
    { id: 1, image: assets.crasole2 },
    { id: 1, image: assets.crasole3 },
    { id: 1, image: assets.crasole4 },
    { id: 1, image: assets.crasole5 },
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
      <View style={{ flex: 1 }}>
        <Carousel
          loop
          snapEnabled
          width={width}
          autoPlay={true}
          data={layesData}
          scrollAnimationDuration={3000}
          renderItem={LayersRenders}
        />
      </View>
    </View>
  )
}

export default HomeScreen