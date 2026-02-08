import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
type Props = {
    title: string,
    style?: string
}
export default function FeatureComponent({title} : Props) {
  return (
    <View style={styles.container}>
        <Text style={styles.headerSection}>{title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 200,
        backgroundColor: '#afeeee',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerSection: {
        fontSize: 40,
        color: '#87cefa',
        fontWeight: 600
    }
})
