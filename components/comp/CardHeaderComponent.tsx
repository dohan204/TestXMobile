import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type IonionsName = keyof typeof Ionicons.glyphMap

type Props = {
    title: string,
    icon: IonionsName 
}
export default function CardHeaderComponent({title, icon} : Props) {
  return (
    <View style={styles.container}>
        <Ionicons name={icon} size={24} />
        <Text>{title}</Text>
    </View>
  )
}

const styles= StyleSheet.create({
    container: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center',
        gap: 8, 
        width: 150, 
        height: 150, 
        backgroundColor: '#87cefa',
        borderRadius: 15
    }
})
