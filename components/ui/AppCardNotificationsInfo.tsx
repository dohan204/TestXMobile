import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
type Props = {
    title: string,
    description: string
}
export default function AppCardNotificationsInfo({title, description}: Props) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={3}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        marginHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4.25,
        elevation: 5
    },
    title: {
        fontSize: 16,
        fontWeight: '500', 
        marginVertical: 5 
    },
    description: {
        fontStyle: 'italic'
    }
})