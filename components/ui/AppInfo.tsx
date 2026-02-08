import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {
    title?: string,
    value?: number,
}
export default function AppInfo({title, value}: Props) {
  return (
    <View style={styles.container}>
        <Text>{title ?? 'CardHeader'}:  </Text>
        <Text style={{fontWeight: 600}}>{value ?? 'ValueHeaer'}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
        backgroundColor: '#ffb6c1',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
})