import React from 'react'
import { View, Image } from 'react-native'

const Header = () => {
  return (
    <View>
      <Image source={require('../assets/background_light.png')} style={{ width: 400, height: 300 }} resizeMode='contain' />
    </View>
  )
}

export default Header
