import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function CommunityScreen() {
  return (
    <View style={styles.container}>
        <Orientation />
    </View>
  )
}

const Orientation = () => {
    return (
        <View>
            <Text>Định hướng</Text>
            <View>
                <View>
                    <Text></Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

