import CommunityHeaderComponent from '@/components/comp/CommunityHeaderComponent'
import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function CommunityScreen() {
  return (
    <View style={styles.container}>
        <CommunityHeaderComponent />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

