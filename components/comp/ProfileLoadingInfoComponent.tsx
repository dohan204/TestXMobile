import React from 'react'
import { StyleSheet, View } from 'react-native'
// import { View } from 'react-native-reanimated/lib/typescript/Animated'
import { Skeleton } from '@rneui/themed'

export default function ProfileLoadingInfoComponent() {
    return (
        <View style={styles.container}>
            <Skeleton width={'100%'} height={100} style={{ borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }} animation='pulse' />
            <Skeleton circle width={80} height={80} style={styles.skeletonAvatar} />
            <Skeleton width={120} height={30} style={{ marginTop: 40, alignSelf: 'center', borderRadius: 5, }} animation='pulse' />
            <Skeleton width={200} height={20} style={{ marginTop: 10, alignSelf: 'center', borderRadius: 5 }} animation='pulse' />
            <Skeleton width={300} height={30} style={{ marginTop: 20, marginHorizontal: 10, borderRadius: 5 }} animation='pulse' />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    skeletonLoading: {
        width: '100%',
        height: 80,
        borderRadius: 8,
        marginBottom: 10
    },
    skeletonAvatar: {
        position: 'absolute',
        top: 60,
        left: '50%',
        transform: [{ translateX: -40 }],
        borderWidth: 3,
        borderColor: '#fff',
        backgroundColor: '#F3F4F6',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
    }
})