import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function HistoryExamTestComponent() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lịch sử gần đây</Text>
            <HeaderTable />
        </View>
    )
}

const HeaderTable = () => {
    return (
        <View style={styles.headerTable}>
            <Text style={styles.textHeaderTable}>Môn</Text>
            <Text style={styles.textHeaderTable}>Điểm</Text>
            <Text style={styles.textHeaderTable}>Ngày</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginVertical: 10,
        borderRadius: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        padding: 10,
    },
    headerTable: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: 'white',
        marginHorizontal: 8,
        marginBottom: 10
    },
    textHeaderTable: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        flex: 1
    },
    textContentTable: {
        textAlign: 'center',
        flex: 1
    }
})