import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
type PropsHeaderTabel = {
    header: string[];
}
export default function AppTable({header}: PropsHeaderTabel) {

    const TableHeader = () => {
        return (
            <View style={styles.tableHeader}>
                <Text style={[styles.textHeader, {flex: 1}]}>{header[0]}</Text>
                <Text style={[styles.textHeader, {flex: 1}]}>{header[1]}</Text>
                <Text style={[styles.textHeader, {flex: 1}]}>{header[2]}</Text>
                <Text style={[styles.textHeader, {flex: 1}]}>{header[3]}</Text>
            </View>
        )
    }

    const tableRow = () => {

    }
  return (
    <View>AppTable</View>
  )
}

const styles= StyleSheet.create({
    tableHeader: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 8,
        margin: 5
    },
    textHeader: {
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#fff'
    }
})