import React from 'react'
import { Image, View } from 'react-native'

export default function ChangeInfoScreen() {
  return (
    <View>
        <View>
          <Image
            source={require('../../../assets/images/backgroundInfo.jpg')}
            style={{width: '100%', height: 300}}
            resizeMode='cover'
          />
        </View>
    </View>
  )
}
